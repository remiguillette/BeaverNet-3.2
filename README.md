# website-v3.2

## Secure contact form architecture

This project now follows the secure pattern:

`Browser -> Backend API -> Discord webhook`

The frontend never sends directly to Discord and never contains the webhook secret.

## Stack

- **Frontend:** React + Vite contact form UI.
- **Backend:** Amplify Gen 2 Function (`amplify/functions/contact-discord`).
- **Secret management:** `DISCORD_WEBHOOK_URL` stored in Amplify secrets.
- **Routing:** Expose the function behind an API route such as `POST /contact`.

## Backend behavior

The Lambda handler includes:

- POST-only request handling + OPTIONS for CORS.
- Input validation for `name`, `email`, and `message`.
- Length limits and email format checks.
- Honeypot bot trap (`company` field).
- Minimum form-fill timing check.
- Basic rate limiting by source IP.
- Discord error handling with safe diagnostics.

## Local/frontend configuration

1. Copy env template:

   ```bash
   cp .env.example .env.local
   ```

2. Set your backend route (not a Discord webhook):

   ```env
   VITE_CONTACT_API_URL=https://api.your-domain.com/contact
   ```

   `VITE_CONTACT_API_URL` is required. There is no hardcoded fallback URL in the frontend.

3. Run locally:

   ```bash
   npm install
   npm run dev
   ```

## Amplify setup notes

1. Add the function secret in Amplify Gen 2 secrets:
   - `DISCORD_WEBHOOK_URL`
   - `CONTACT_ALLOWED_ORIGIN` (for your site URL)
2. Deploy backend resources.
3. Connect the function to an API Gateway/HTTP API route (`POST /contact`).
4. Set `VITE_CONTACT_API_URL` to that route in every environment (local `.env.local`, CI/CD, and hosting platform runtime/build env vars).
