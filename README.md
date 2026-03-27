# website-v3.2

A bilingual (EN/FR) React + Vite website for a services organization, with a secure contact workflow powered by AWS Amplify Gen 2 and Discord webhook delivery.

---

## 1) Project Overview

### Project Name
**website-v3.2**

### Description
This project is a modern, multi-page web application designed to present service offerings (public safety, francophone services, health & safety, and animal first aid), provide organization information, and collect inbound inquiries through a secure contact form.

The platform is intended for:
- Community members and potential clients exploring available services.
- Visitors who need a quick, mobile-friendly way to contact the organization.
- Site administrators who want a simple, low-maintenance frontend and a hardened backend submission flow.

### Key Features
- React SPA with route-based pages (home, about, contact, privacy policy, service pages).
- EN/FR localization support via a translation context.
- Secure contact submission pipeline:
  - Client-side validation and anti-abuse cooldown.
  - API-backed submission (no webhook secrets in browser code).
  - Server-side validation, honeypot protection, method checks, and CORS control.
  - Discord webhook relay from serverless backend.
- AWS Amplify Gen 2 backend infrastructure with API Gateway + Lambda integration.
- Vite-based fast local development and production bundling.

---

## 2) Tech Stack

### Frontend
- **Framework:** React 18 + TypeScript
- **Bundler/Dev Server:** Vite 5
- **Routing:** `react-router-dom` (browser router)
- **Icons/UI helpers:** `lucide-react`, `react-icons`
- **Styling:** Custom CSS (`src/styles/global.css`)

### Backend
- **Platform:** AWS Amplify Gen 2
- **Runtime:** AWS Lambda (TypeScript handler)
- **API Layer:** API Gateway HTTP API (`/contact`)
- **External Integration:** Discord webhook endpoint (secret-managed)

### Database
- No database is currently configured.
- Contact messages are relayed to Discord rather than persisted.

### DevOps / Tooling
- **CI/CD config:** `amplify.yml`
- **Build tooling:** npm scripts (`dev`, `build`, `preview`)
- **Secrets & config:** Amplify secrets and environment variables

---

## 3) Project Structure

```text
website-v3.2/
├── amplify/
│   ├── backend.ts
│   └── functions/
│       └── contact-discord/
│           ├── config.ts
│           ├── handler.ts
│           └── resource.ts
├── public/
├── src/
│   ├── app/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── data/
│   ├── hooks/
│   ├── i18n/
│   ├── pages/
│   ├── styles/
│   └── main.tsx
├── .env.example
├── amplify.yml
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

### Directory Responsibilities
- `amplify/`: Infrastructure-as-code and backend function definitions.
- `amplify/functions/contact-discord/`: Contact API Lambda logic (validation + webhook forwarding).
- `public/`: Static assets served directly.
- `src/app/`: App-level setup (e.g., route configuration).
- `src/components/`: Reusable UI components (layout, contact form, etc.).
- `src/contexts/`: Global providers (e.g., translation context).
- `src/hooks/`: Reusable hooks (e.g., contact form logic).
- `src/pages/`: Route-level page components.
- `src/styles/`: Global stylesheet and shared visual styles.

---

## 4) Architecture

### Frontend ↔ Backend Interaction
1. User fills out the contact form on the React frontend.
2. Frontend posts JSON to `VITE_CONTACT_API_URL` (expected to map to `POST /contact`).
3. API Gateway routes request to Amplify-managed Lambda.
4. Lambda validates input, applies anti-spam checks, then forwards formatted message to Discord webhook.
5. API returns success/error JSON back to frontend for user feedback.

### Data Flow
```text
Browser (React form)
  -> HTTP POST /contact (API Gateway)
    -> Lambda handler (validation + security checks)
      -> Discord Webhook
    <- JSON response
  <- UI success/error message
```

### API Structure & Routing
- **Frontend routes** are configured with `createBrowserRouter` in `src/app/router.tsx`.
- **Backend API route** is provisioned in `amplify/backend.ts`:
  - `POST /contact`
  - `OPTIONS /contact` (CORS preflight)

---

## 5) Installation & Setup

### Prerequisites
- Node.js 18+ (Node 20 LTS recommended)
- npm 9+
- AWS account + Amplify permissions (for backend deployment)
- Discord server + webhook URL

### Local Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd website-v3.2
```

2. Install dependencies:
```bash
npm install
```

3. Create local environment file:
```bash
cp .env.example .env.local
```

4. Set frontend API target in `.env.local`:
```env
VITE_CONTACT_API_URL=https://your-api-domain/contact
```

5. Start development server:
```bash
npm run dev
```

### Environment Variables

#### Frontend (`.env.local`)
```env
# Public URL used by the browser to call your backend contact endpoint
VITE_CONTACT_API_URL=https://your-api-domain/contact
```

#### Backend (Amplify environment/secrets)
```env
# Amplify secret
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...

# Comma-separated web origins allowed for CORS
CONTACT_ALLOWED_ORIGINS=http://localhost:5173,https://staging.example.com,https://www.example.com
```

> Never commit real secrets to source control.

---

## 6) Usage

### Run in Development
```bash
npm run dev
```
- Launches Vite dev server (default: `http://localhost:5173`).

### Build for Production
```bash
npm run build
```
- Outputs optimized static assets into `dist/`.

### Preview Production Build Locally
```bash
npm run preview
```
- Serves the production bundle for local verification.

---

## 7) API Endpoints

### Main Route

#### `POST /contact`
Submits contact form payload to backend for validation + Discord relay.

**Request body (example):**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Hello, I am interested in your services.",
  "website": ""
}
```

**Success response (200):**
```json
{
  "ok": true
}
```

**Common error responses:**
- `400` invalid/missing fields
- `405` method not allowed
- `502` upstream webhook failure
- `500` internal server error

#### `OPTIONS /contact`
Handles CORS preflight.

---

## 8) UI / UX Design

### Main Pages
- Home (`/`)
- About (`/about`)
- Contact (`/contact`)
- Privacy Policy (`/privacy-policy`)
- Service Pages (`/public-safety`, `/francophone-services`, `/health-safety`, `/animal-first-aid`)

### Navigation Structure
- Header-based global navigation for key pages/services.
- Router-driven page transitions in a single-page application model.
- Footer and policy routes for trust/compliance content.

### Design Principles
- Responsive layout for desktop/tablet/mobile usage.
- Accessibility-conscious forms (labels, required fields, semantic controls).
- Clear visual feedback for form submission states (loading/success/error).
- Bilingual-ready text architecture via translation provider.

---

## 9) Scripts

From `package.json`:

- `npm run dev` — Start local development server.
- `npm run build` — Build production assets.
- `npm run preview` — Preview built app locally.

---

## 10) Deployment

### Frontend Deployment (Amplify Hosting)
The repository includes `amplify.yml` with build steps:
1. `npm ci`
2. `npm run build`
3. Publish `dist/` artifacts

### Backend Deployment (Amplify Gen 2)
- Define function and API in `amplify/`.
- Configure:
  - `DISCORD_WEBHOOK_URL` as an Amplify secret.
  - `CONTACT_ALLOWED_ORIGINS` as environment variable(s).
- Deploy backend resources through Amplify tooling/console.

### Post-Deployment Checklist
- Verify `VITE_CONTACT_API_URL` points to deployed API route.
- Confirm CORS allows your production frontend origin.
- Send a test submission from the production contact page.

---

## 11) Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make focused changes with clear commit messages.
4. Run checks/build locally before opening a PR.
5. Open a Pull Request including:
   - What changed
   - Why it changed
   - Screenshots (for UI changes)

### Recommended Contribution Practices
- Keep components small and reusable.
- Maintain TypeScript type safety.
- Avoid introducing secrets into frontend code.
- Update documentation when behavior or setup changes.

---

## 12) License

No license file is currently included in this repository.

If you plan to open-source this project, add a license such as MIT:
- Create `LICENSE`
- Add copyright owner/year
- Reference it from this README

---

## 13) Future Improvements / Roadmap

Potential next steps:
- Add automated tests (unit + integration + e2e).
- Add linting/formatting pipelines (ESLint + Prettier).
- Add structured logging and monitoring dashboards.
- Introduce message persistence (e.g., DynamoDB) for audit/history.
- Add CAPTCHA/Turnstile as an additional anti-abuse layer.
- Add CI checks for pull requests (build, type checks, tests).

---

## Support

If you need help setting up or deploying this project, open an issue with:
- Your environment details (OS, Node version)
- Steps to reproduce
- Relevant logs/error output
