#!/usr/bin/env bash
# Build script for Cloudflare Pages.
# Composes agency/homepage and clients/orozco into public_dist/, adds SPA fallback + cache headers.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

(cd "$ROOT/agency/homepage" && npm ci --silent && npm run build)
(cd "$ROOT/clients/orozco" && npm ci --silent && VITE_BASE_PATH=/orozco/ npm run build)

rm -rf "$ROOT/public_dist"
mkdir -p "$ROOT/public_dist"
cp -r "$ROOT/agency/homepage/dist/." "$ROOT/public_dist/"
mkdir -p "$ROOT/public_dist/orozco"
cp -r "$ROOT/clients/orozco/dist/." "$ROOT/public_dist/orozco/"

cat > "$ROOT/public_dist/_redirects" <<'EOF'
/orozco/*  /orozco/index.html  200
/*         /index.html         200
EOF

cat > "$ROOT/public_dist/_headers" <<'EOF'
/assets/*
  Cache-Control: public, max-age=31536000, immutable
/orozco/assets/*
  Cache-Control: public, max-age=31536000, immutable
EOF
