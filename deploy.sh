#!/bin/bash
# Flowtix AI — one-shot redeploy script
# Commits any local changes, pushes to GitHub main, then runs a Vercel production deploy.

set -e
cd "$(dirname "$0")"

# Load Node 20 if nvm is present (Vercel + Next 16 need >=18)
if [ -s "$HOME/.nvm/nvm.sh" ]; then
  # shellcheck disable=SC1091
  source "$HOME/.nvm/nvm.sh"
  nvm use 20 >/dev/null 2>&1 || true
fi

# Ensure ~/.local/bin (where gh lives) is on PATH
export PATH="$HOME/.local/bin:$PATH"

echo "🔄 Updating Flowtix AI..."

# Stage everything
git add .

# Commit only if there's something staged
if ! git diff --cached --quiet; then
  git commit -m "Update: $(date '+%Y-%m-%d %H:%M')"
else
  echo "ℹ️  No local changes to commit — re-deploying current main."
fi

# Push (no-op if already up to date)
git push origin main

# Production deploy
vercel --prod --yes

echo "✅ Live at https://flowtix.ai"
