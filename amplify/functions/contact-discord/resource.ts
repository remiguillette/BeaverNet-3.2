import { defineFunction, secret } from "@aws-amplify/backend";
import { CONTACT_ALLOWED_ORIGINS_ENV_KEY } from "./config";

export const contactDiscord = defineFunction({
  name: "contact-discord",
  entry: "./handler.ts",
  environment: {
    DISCORD_WEBHOOK_URL: secret("DISCORD_WEBHOOK_URL"),
    [CONTACT_ALLOWED_ORIGINS_ENV_KEY]: process.env[CONTACT_ALLOWED_ORIGINS_ENV_KEY] ?? "",
  },
});
