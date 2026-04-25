# Dev Updates

Short list of recent pushes and changes.

---

## v2.6.2

API Token
- New API Token section in Settings (collapsible, placed after Appearance/Motion)
- Generate, regenerate, and revoke API keys via POST/GET/DELETE /auth/api-key
- Key shown once on generation with one-click copy; prefix + created date displayed when active
- Endpoint reference panel: WSS real-time feed + REST trade history
- Setup guide (collapsible): 5 steps with syntax-highlighted JSON blocks matching accounts page style
- alertType values pill strip (tradeOpened, tradeClosed, tradeError, connectionError, accountUpdated, systemAlert)

WebSocket Alerts
- New useAlertsWebSocket hook — connects to wss://api.hextrade.io/alerts?apiKey=hxt_...
- Mounted at layout level alongside useExecutionsWebSocket
- Handles connected, trade, pong, error frames; auth failure (code 1008) does not reconnect
- Key rotation tracked via ref — stale key never reconnects after regeneration
- playTradeSound exported from use-executions-websocket for reuse

Notifications (Settings)
- Master on/off toggle silences all channels
- Delivery channels: Discord Webhook (URL input + Test button), Discord DMs, Email Alerts
- Alert types grid: Trade Opened, Trade Closed, Trade Error, Connection Error, Account Updated, System Alert
- Trade Sound: browser audio on every execution, volume slider (0–100%)
- All settings persisted to api.hextrade.io/discord-notifications/settings
- Masked webhook URL shown when already configured; paste new URL to replace

---

## v2.6.1

Portfolio
- Added Portfolio to sidebar
- Multi-algo builder: contract type + quantity per algo
- P&L chart, drawdown chart, calendar, metrics grid
- Optimize: composite score (recovery, Sharpe, Sortino, Calmar, etc.)
- Deploy modal, save/clear to local storage, CSV export
- Calendar: "trades" not "t", layout aligned with algo page; removed "Combined portfolio daily results" tag

Update log
- Megaphone icon in header opens popup (fetches api.hextrade.io/update-log)
- Compact layout, 12-line cap per release
- Removed Updates from sidebar and /updates route

Other
- Mobile: sidebar (hamburger) visible on Settings
- Settings header layout fix

Backend
- /update-log API (GET list, POST add), push script, Discord dev-updates
- Historical logs seeded (v1.2.1–v2.5.1)
