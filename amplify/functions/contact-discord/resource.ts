import { defineFunction, secret } from "@aws-amplify/backend";

export const contactDiscord = defineFunction({
  name: "contact-discord",
  entry: "./handler.ts",
  environment: {
    DISCORD_WEBHOOK_URL: secret("DISCORD_WEBHOOK_URL"),
  },
});
