<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# AI Studio for Silverback

Apps in this repo are grouped by what they are:

```
agency/           Silverback marketing
  homepage/       silverbackai.agency
  silverback/     proposal landing + case study

clients/          work for a specific customer
  orozco/         Orozco Landscaping site + send PDFs

products/         things we sell or run
  security/       apartment AI monitoring (AI Studio app)
  timesheets/     Time Sheets by Silverback prototype

scripts/          shared build helpers
.github/          deploy workflows
```

Public URLs did not change. Only the folders on disk moved.

View the security app in AI Studio: https://ai.studio/apps/d3deeaf9-500c-40a5-a8f4-39a756d120af

## Run locally

**Prerequisites:** Node.js

From the repo root:

```bash
npm install --prefix products/security
npm run dev                 # security dashboard (AI Studio)
# or
npm run dev:homepage
npm run dev:orozco
npm run dev:silverback
npm run dev:timesheets
```

For the security app, set `GEMINI_API_KEY` in `products/security/.env.local`.

## Auto-deploy homepage to Cloudflare Pages

Push-to-deploy for the homepage stack (`agency/homepage` + `clients/orozco`)
is `.github/workflows/deploy-cloudflare-homepage.yml`.

Set these once in GitHub repo settings:

- **Secret** `CLOUDFLARE_API_TOKEN` (Pages deploy token)
- **Secret** `CLOUDFLARE_ACCOUNT_ID` (Cloudflare account id)
- **Variable** `CLOUDFLARE_PAGES_PROJECT_NAME` (Pages project name for `silverbackai.agency`)

After that, commits pushed from Google AI Studio to `main` automatically build and deploy
to Cloudflare Pages.

---

## Time Sheets by Silverback — prototype

Visual prototype of **Time Sheets by Silverback** lives in
[`products/timesheets/`](./products/timesheets/). Self-contained Vite + React app.

```bash
cd products/timesheets
npm install
npm run dev   # open http://localhost:5173
```

See [`products/timesheets/README.md`](./products/timesheets/README.md) for deploy options.
