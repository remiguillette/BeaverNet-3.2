import { defineFunction, secret } from "@aws-amplify/backend";

export const contactDiscord = defineFunction({
  name: "contact-discord",
  entry: "./handler.ts",
  timeoutSeconds: 10,
  environment: {
    DISCORD_WEBHOOK_URL: secret("DISCORD_WEBHOOK_URL"),
    ALLOWED_ORIGIN: secret("CONTACT_ALLOWED_ORIGIN"),
  },
});
