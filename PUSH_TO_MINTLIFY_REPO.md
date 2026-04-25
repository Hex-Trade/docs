# Push these docs to Hex-Trade/docs (Mintlify)

Your Mintlify site is built from **[Hex-Trade/docs](https://github.com/hex-trade/docs)**, not from the Dashboard repo. To publish the user docs:

## 1. Clone the docs repo (one-time)

From a folder of your choice (e.g. Desktop):

```powershell
cd c:\Users\Aggie\Desktop
git clone https://github.com/Hex-Trade/docs.git
cd docs
```

## 2. Copy files from this Dashboard into the docs repo

Copy these into the **root** of the cloned `docs` repo (overwrite when asked):

- From **Dashboard repo root:** `docs.json` → into `docs/` repo root
- From **Dashboard repo** `docs/` folder: all `.mdx` files → into `docs/` repo root

So in the end, the **docs** repo root should contain:

- `docs.json` (from Dashboard root)
- `index.mdx`, `getting-started.mdx`, `discord.mdx`
- `accounts.mdx`, `algos.mdx`, `copy-trade.mdx`, `analytics.mdx`, `calendar.mdx`, `subscriptions.mdx`
- `trading.mdx`, `chart-settings.mdx`, `settings.mdx`

You can do the copy in PowerShell from the Dashboard repo:

```powershell
cd c:\Users\Aggie\Desktop\Dashboard
Copy-Item docs.json ..\docs\
Copy-Item docs\*.mdx ..\docs\
```

(Adjust `..\docs` if your `docs` clone is somewhere else.)

## 3. Commit and push in the docs repo

```powershell
cd c:\Users\Aggie\Desktop\docs
git add docs.json *.mdx
git status
git commit -m "Replace with Hextrade user docs (how to use the platform)"
git push origin main
```

Mintlify will pick up the push and redeploy. The old starter pages (e.g. quickstart.mdx, development.mdx, ai-tools/, api-reference/, essentials/) can be removed in the docs repo if you want the site to show only these user docs; otherwise they’ll still appear in the nav if they’re referenced in `docs.json`.
