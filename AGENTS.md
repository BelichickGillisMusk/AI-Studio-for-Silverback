# AGENTS.md

## Cursor Cloud specific instructions

Monorepo: root **Silverback AI Security** app (Express + Vite + WebSocket) plus standalone sub-apps under `timesheets/`, `homepage/`, `orozco/`, `silverback/`.

### Commands (root security app)

| Task | Command |
|------|---------|
| Install | `npm install` |
| Dev server | `npm run dev` → `http://localhost:3000` |
| Typecheck | `npm run lint` (`tsc --noEmit`) |
| Build | `npm run build` |

Optional: `GEMINI_API_KEY` in `.env.local` for Gemini AI analysis.

### Sub-apps

Each subdir has its own `package.json`. Run `npm install` then `npm run dev` inside the subdir (timesheets defaults to `:5173`).

### Gotchas

- Bind **port 3000** before starting other Vite apps in the workspace, or this server fails with `EADDRINUSE`.
- Root `npm run lint` may error if sub-app `node_modules` are present (tsconfig does not exclude subdirs). Use per-sub-app `npm run typecheck` or `npm run build` instead.
