type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
  startedAt?: number;
};

type LambdaEvent = {
  body?: string | null;
  requestContext?: {
    http?: {
      method?: string;
      sourceIp?: string;
    };
  };
};

const MAX_MESSAGE_LENGTH = 2000;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 200;
const MIN_FORM_FILL_TIME_MS = 3000;
const REQUEST_COOLDOWN_MS = 15000;

const rateLimitStore = new Map<string, number>();

const json = (statusCode: number, body: unknown, origin: string) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST,OPTIONS",
  },
  body: JSON.stringify(body),
});

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const toDiscordContent = (data: Required<Pick<ContactPayload, "name" | "email" | "message">>) =>
  ["📩 New contact message", `**Name:** ${data.name}`, `**Email:** ${data.email}`, `**Message:**\n${data.message}`].join("\n");

export const handler = async (event: LambdaEvent) => {
  const method = event.requestContext?.http?.method;
  const allowedOrigin = process.env.ALLOWED_ORIGIN || "https://your-domain.com";

  if (method === "OPTIONS") {
    return json(200, { ok: true }, allowedOrigin);
  }

  if (method !== "POST") {
    return json(405, { error: "Method not allowed" }, allowedOrigin);
  }

  let payload: ContactPayload;

  try {
    payload = JSON.parse(event.body ?? "{}");
  } catch {
    return json(400, { error: "Invalid JSON" }, allowedOrigin);
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const message = (payload.message ?? "").trim();
  const company = (payload.company ?? "").trim();
  const startedAt = Number(payload.startedAt ?? 0);

  if (company) {
    return json(200, { ok: true }, allowedOrigin);
  }

  if (!name || !email || !message) {
    return json(400, { error: "Missing required fields" }, allowedOrigin);
  }

  if (!isEmail(email)) {
    return json(400, { error: "Invalid email format" }, allowedOrigin);
  }

  if (name.length > MAX_NAME_LENGTH || email.length > MAX_EMAIL_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
    return json(400, { error: "Input too long" }, allowedOrigin);
  }

  if (startedAt > 0 && Date.now() - startedAt < MIN_FORM_FILL_TIME_MS) {
    return json(429, { error: "Submitted too quickly" }, allowedOrigin);
  }

  const ip = event.requestContext?.http?.sourceIp ?? "unknown";
  const lastSeen = rateLimitStore.get(ip) ?? 0;
  if (Date.now() - lastSeen < REQUEST_COOLDOWN_MS) {
    return json(429, { error: "Too many requests. Please wait a few seconds." }, allowedOrigin);
  }
  rateLimitStore.set(ip, Date.now());

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    return json(500, { error: "Webhook not configured" }, allowedOrigin);
  }

  const discordRes = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: toDiscordContent({ name, email, message }) }),
  });

  if (!discordRes.ok) {
    const details = (await discordRes.text()).slice(0, 500);
    return json(502, { error: "Discord request failed", details }, allowedOrigin);
  }

  return json(200, { ok: true }, allowedOrigin);
};
