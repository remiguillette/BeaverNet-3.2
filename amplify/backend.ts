import { defineBackend } from "@aws-amplify/backend";
import { contactDiscord } from "./functions/contact-discord/resource";

/**
 * Amplify backend resources.
 * Connect `contactDiscord` to a REST/HTTP API route (POST /contact)
 * using API Gateway in your Gen 2 backend setup.
 */
defineBackend({
  contactDiscord,
});
