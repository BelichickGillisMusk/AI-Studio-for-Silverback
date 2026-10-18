# AI Studio for Silverback

Five apps live in this repo. Each one has its own `package.json`. Run install and dev from that app's folder.

| Folder | What it is |
| --- | --- |
| [`security/`](./security/) | Apartment security applet from Google AI Studio. Deploys to the Cloudflare Pages project `ai-studio-for-silverback`. |
| [`homepage/`](./homepage/) | Agency homepage for silverbackai.agency. |
| [`orozco/`](./orozco/) | Orozco Landscaping one-pager, brochures in `orozco/send/`, and Google Business Profile notes in `orozco/gbp.md`. |
| [`silverback/`](./silverback/) | Proposal page for Site + Profile and Timeclock. The sendable PDF is in `silverback/send/`. |
| [`timesheets/`](./timesheets/) | Time Sheets prototype. See [`timesheets/README.md`](./timesheets/README.md). |

`scripts/build.sh` builds `homepage/` and `orozco/` into `public_dist/` for Cloudflare Pages.

GitHub Actions:

- `.github/workflows/deploy-root.yml` builds `security/` and deploys it.
- `.github/workflows/deploy-cloudflare-homepage.yml` deploys the homepage bundle.
- `.github/workflows/deploy-timesheets.yml` builds `silverback/`, `orozco/`, and `timesheets/` onto GitHub Pages.
