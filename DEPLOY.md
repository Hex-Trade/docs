# Deploy Hextrade docs on Vercel

This repo is a Next.js app. It is no longer a Mintlify project.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Walkthrough videos belong in `public/videos/` (same filenames as before: `Create-Account.mp4`, `Login-Account.mp4`, `Purchase-Sub.mp4`, `Add-Account.webm`, and the page videos). Platform logos belong in `public/images/platforms/`.

## Vercel

1. Import this GitHub repo into [Vercel](https://vercel.com/new). Framework preset is **Next.js**.
2. Confirm the build command is `next build` and the output is the default Next.js output.
3. Deploy a preview first and click through Welcome → Quick start → Accounts → Algorithms.
4. Point `docs.hextrade.io` at the Vercel project (Project → Settings → Domains).
5. In the Mintlify dashboard, disconnect the GitHub app or archive the project so pushes no longer rebuild the old site.

Optional: set `NEXT_PUBLIC_SITE_URL=https://docs.hextrade.io` so Copy / ChatGPT / Claude links use the production origin.

## Redirects

Old Mintlify paths are mapped in `next.config.ts`:

- `/getting-started` → `/quick-start`
- `/supported-brokers` → `/brokers`
- `/algorithms/overview` and `/algorithms/:family` → `/algorithms`
- `/copy-trading/setup` → `/copy-trading`
- `/external-algorithms/tradingview-webhooks` → `/webhooks`
- `/portfolio/:path*` → `/portfolio`
