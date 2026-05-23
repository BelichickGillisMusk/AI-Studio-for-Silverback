<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/d3deeaf9-500c-40a5-a8f4-39a756d120af

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Auto-deploy homepage to Cloudflare Pages

This repo now supports push-to-deploy for the homepage stack (`/homepage` + `/orozco`)
via GitHub Actions workflow:
`.github/workflows/deploy-cloudflare-homepage.yml`.

Set these once in GitHub repo settings:

- **Secret** `CLOUDFLARE_API_TOKEN` (Pages deploy token)
- **Secret** `CLOUDFLARE_ACCOUNT_ID` (Cloudflare account id)
- **Variable** `CLOUDFLARE_PAGES_PROJECT_NAME` (Pages project name for `silverbackai.agency`)

After that, commits pushed from Google AI Studio to `main` automatically build and deploy
to Cloudflare Pages.

---

## Time Sheets by Silverback — prototype

This branch also contains a visual prototype of **Time Sheets by Silverback**
(a separate product — time-and-labor SaaS for field-service crews) under
[`/timesheets/`](./timesheets/). It's a self-contained Vite + React app with
its own `package.json` and does not touch the surveillance app above.

```bash
cd timesheets
npm install
npm run dev   # open http://localhost:5173
```

See [`timesheets/README.md`](./timesheets/README.md) for deploy options.
