import type {
  APIGatewayProxyEvent,
  APIGatewayProxyEventV2,
  APIGatewayProxyResult,
} from "aws-lambda";
import {
  CONTACT_ALLOWED_ORIGINS_ENV_KEY,
  parseAllowedOrigins,
} from "./config";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
};

type ValidationOutcome =
  | "options"
  | "method_not_allowed"
  | "invalid_json"
  | "honeypot"
  | "missing_fields"
  | "invalid_email"
  | "input_too_long"
  | "valid";

type ApiGatewayEvent = APIGatewayProxyEvent | APIGatewayProxyEventV2;

const allowedOrigins = parseAllowedOrigins(process.env[CONTACT_ALLOWED_ORIGINS_ENV_KEY]);

function readHeader(event: ApiGatewayEvent, headerName: string): string | undefined {
  const targetName = headerName.toLowerCase();

  for (const [headerKey, value] of Object.entries(event.headers ?? {})) {
    if (headerKey.toLowerCase() === targetName && typeof value === "string") {
      return value;
    }
  }

  return undefined;
}

function resolveAllowedOrigin(event: ApiGatewayEvent): string | undefined {
  const requestOrigin = readHeader(event, "origin");

  if (!requestOrigin) {
    return allowedOrigins[0];
  }

  return allowedOrigins.includes(requestOrigin) ? requestOrigin : undefined;
}

function response(
  statusCode: number,
  body: Record<string, string | boolean>,
  event: ApiGatewayEvent,
): APIGatewayProxyResult {
  const allowedOrigin = resolveAllowedOrigin(event);

  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      ...(allowedOrigin ? { "Access-Control-Allow-Origin": allowedOrigin } : {}),
      ...(allowedOrigins.length > 0
        ? {
            "Access-Control-Allow-Headers": "content-type",
            "Access-Control-Allow-Methods": "POST,OPTIONS",
            Vary: "Origin",
          }
        : {}),
    },
    body: JSON.stringify(body),
  };
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getRequestId(event: ApiGatewayEvent): string {
  if ("requestContext" in event && "requestId" in event.requestContext) {
    return event.requestContext.requestId;
  }

  const xRequestId = readHeader(event, "x-request-id");
  return xRequestId ?? crypto.randomUUID();
}

function getMethod(event: ApiGatewayEvent): string {
  if ("version" in event) {
    return event.requestContext.http.method;
  }

  return event.httpMethod;
}

function parseJsonBody<T extends object>(event: ApiGatewayEvent): T {
  const rawBody = event.body;

  if (!rawBody) {
    return {} as T;
  }

  const normalized = event.isBase64Encoded
    ? Buffer.from(rawBody, "base64").toString("utf8")
    : rawBody;

  return JSON.parse(normalized) as T;
}

function logMetadata(metadata: {
  requestId: string;
  method: string;
  validationOutcome: ValidationOutcome;
  upstreamStatus?: number;
  statusCode?: number;
  errorKind?: "upstream" | "internal";
}) {
  console.log(
    JSON.stringify({
      component: "contact-discord-handler",
      ...metadata,
    }),
  );
}

export const handler = async (event: ApiGatewayEvent): Promise<APIGatewayProxyResult> => {
  const method = getMethod(event);
  const requestId = getRequestId(event);

  try {
    if (method === "OPTIONS") {
      logMetadata({ requestId, method, validationOutcome: "options", statusCode: 200 });
      return response(200, { ok: true }, event);
    }

    if (method !== "POST") {
      logMetadata({
        requestId,
        method,
        validationOutcome: "method_not_allowed",
        statusCode: 405,
      });
      return response(405, { error: "Method not allowed" }, event);
    }

    let payload: ContactBody = {};
    try {
      payload = parseJsonBody<ContactBody>(event);
    } catch {
      logMetadata({
        requestId,
        method,
        validationOutcome: "invalid_json",
        statusCode: 400,
      });
      return response(400, { error: "Invalid JSON body" }, event);
    }

    const name = (payload.name ?? "").trim();
    const email = (payload.email ?? "").trim();
    const message = (payload.message ?? "").trim();
    const website = (payload.website ?? "").trim();

    if (website) {
      logMetadata({ requestId, method, validationOutcome: "honeypot", statusCode: 200 });
      return response(200, { ok: true }, event);
    }

    if (!name || !email || !message) {
      logMetadata({
        requestId,
        method,
        validationOutcome: "missing_fields",
        statusCode: 400,
      });
      return response(400, { error: "Missing required fields" }, event);
    }

    if (!isValidEmail(email)) {
      logMetadata({
        requestId,
        method,
        validationOutcome: "invalid_email",
        statusCode: 400,
      });
      return response(400, { error: "Invalid email address" }, event);
    }

    if (name.length > 100 || email.length > 200 || message.length > 2000) {
      logMetadata({
        requestId,
        method,
        validationOutcome: "input_too_long",
        statusCode: 400,
      });
      return response(400, { error: "Input too long" }, event);
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      throw new Error("webhook_not_configured");
    }

    const discordPayload = {
      content:
        "📩 Nouveau message de contact\n\n" +
        `**Nom :** ${name}\n` +
        `**Email :** ${email}\n` +
        `**Message :**\n${message}`,
    };

    const discordRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordPayload),
    });

    if (!discordRes.ok) {
      logMetadata({
        requestId,
        method,
        validationOutcome: "valid",
        upstreamStatus: discordRes.status,
      });

      return response(
        502,
        {
          error: "Unable to process request",
          correlationId: requestId,
        },
        event,
      );
    }

    logMetadata({
      requestId,
      method,
      validationOutcome: "valid",
      upstreamStatus: discordRes.status,
      statusCode: 200,
    });

    return response(200, { ok: true }, event);
  } catch {
    logMetadata({
      requestId,
      method,
      validationOutcome: "valid",
      errorKind: "internal",
      statusCode: 500,
    });

    return response(
      500,
      {
        error: "Unable to process request",
        correlationId: requestId,
      },
      event,
    );
  }
};
