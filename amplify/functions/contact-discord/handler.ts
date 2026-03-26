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

const allowedOrigins = parseAllowedOrigins(process.env[CONTACT_ALLOWED_ORIGINS_ENV_KEY]);

function resolveAllowedOrigin(event: any): string | undefined {
  const requestOrigin =
    event?.headers?.origin ??
    event?.headers?.Origin ??
    event?.headers?.ORIGIN ??
    undefined;

  if (!requestOrigin) {
    return allowedOrigins[0];
  }

  return allowedOrigins.includes(requestOrigin) ? requestOrigin : undefined;
}

function response(statusCode: number, body: unknown, event: any) {
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

export const handler = async (event: any) => {
  const method = event?.requestContext?.http?.method || event?.httpMethod || "POST";

  if (method === "OPTIONS") {
    return response(200, { ok: true }, event);
  }

  if (method !== "POST") {
    return response(405, { error: "Method not allowed" }, event);
  }

  let payload: ContactBody = {};
  try {
    payload = JSON.parse(event.body ?? "{}");
  } catch {
    return response(400, { error: "Invalid JSON body" }, event);
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const message = (payload.message ?? "").trim();
  const website = (payload.website ?? "").trim();

  if (website) {
    return response(200, { ok: true }, event);
  }

  if (!name || !email || !message) {
    return response(400, { error: "Missing required fields" }, event);
  }

  if (!isValidEmail(email)) {
    return response(400, { error: "Invalid email address" }, event);
  }

  if (name.length > 100 || email.length > 200 || message.length > 2000) {
    return response(400, { error: "Input too long" }, event);
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    return response(500, { error: "Missing webhook secret" }, event);
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
    const errorText = await discordRes.text();
    return response(
      502,
      {
        error: "Discord webhook failed",
        details: errorText.slice(0, 500),
      },
      event,
    );
  }

  return response(200, { ok: true }, event);
};
