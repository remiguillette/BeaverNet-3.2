# website-v3.2

## Contact form Discord webhook

The contact form supports direct Discord webhook delivery via environment variable.

1. Create a local env file:
   ```bash
   cp .env.example .env.local
   ```
2. Set your webhook URL:
   ```env
   VITE_DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...
   ```
3. Run the site:
   ```bash
   npm run dev
   ```

When `VITE_DISCORD_WEBHOOK_URL` is not set, the form posts to `/api/contact`.
