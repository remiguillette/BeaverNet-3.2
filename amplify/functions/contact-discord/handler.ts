type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
};

const allowedOrigin = process.env.ALLOWED_ORIGIN ?? "http://localhost:5173";

function response(statusCode: number, body: unknown) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Headers": "content-type",
      "Access-Control-Allow-Methods": "POST,OPTIONS",
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
    return response(200, { ok: true });
  }

  if (method !== "POST") {
    return response(405, { error: "Method not allowed" });
  }

  let payload: ContactBody = {};
  try {
    payload = JSON.parse(event.body ?? "{}");
  } catch {
    return response(400, { error: "Invalid JSON body" });
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const message = (payload.message ?? "").trim();
  const website = (payload.website ?? "").trim();

  if (website) {
    return response(200, { ok: true });
  }

  if (!name || !email || !message) {
    return response(400, { error: "Missing required fields" });
  }

  if (!isValidEmail(email)) {
    return response(400, { error: "Invalid email address" });
  }

  if (name.length > 100 || email.length > 200 || message.length > 2000) {
    return response(400, { error: "Input too long" });
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    return response(500, { error: "Missing webhook secret" });
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
    return response(502, {
      error: "Discord webhook failed",
      details: errorText.slice(0, 500),
    });
  }

  return response(200, { ok: true });
};
