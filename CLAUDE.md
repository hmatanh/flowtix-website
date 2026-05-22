# Flowtix Website
## Rules
- Project scope is this folder only. Do NOT touch any other project on this machine.
- External connections allowed only: `git push origin main` (GitHub: hmatanh/flowtix-website) and `vercel --prod` (project: flowtix-website).
- Live site: https://flowtix.ai (auto-deploy from main via Vercel).
- No other MCP / external services / credentials from other projects.
## Stack
Next.js 16 (App Router) with `output: 'export'` (static export), Tailwind v4, TypeScript, framer-motion. Vercel serves the exported static files; security headers live in `vercel.json` + `public/_headers` (Next `headers()` is ignored by static export).
## Deploy
`./deploy.sh` runs git push + vercel --prod. Use at checkpoints, not after every edit.
## Contact
office@flowtix.ai | flowtix.ai
