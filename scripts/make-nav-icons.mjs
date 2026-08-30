import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images", "nav");
mkdirSync(dir, { recursive: true });

function tile(bg, inner) {
  return `<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" rx="3" fill="${bg}"/>${inner}</svg>\n`;
}

const icons = {
  welcome: tile(
    "#0EA5E9",
    `<path d="M9 3.2 14.6 7.4v7.2H11V10H7v4.6H3.4V7.4L9 3.2Z" fill="#fff"/>`,
  ),
  "quick-start": tile(
    "#F59E0B",
    `<path d="M10.2 2.6 4.4 10.2h4l-1 5.2 6.2-8H9.6l.6-4.8Z" fill="#fff"/>`,
  ),
  accounts: tile(
    "#3B82F6",
    `<path d="M4 7.2h10v7.2H4V7.2Zm1.4 1.6v1.2h2.2V8.8H5.4ZM9 3.6a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8Z" fill="#fff"/>`,
  ),
  algorithms: tile(
    "#8B5CF6",
    `<path d="M6.2 4h5.6v2H14v2h-2.2v2H14v2h-2.2v2H6.2v-2H4v-2h2.2V8H4V6h2.2V4Zm1.6 2.4v5.2h2.4V6.4H7.8Z" fill="#fff"/>`,
  ),
  "copy-trading": tile(
    "#14B8A6",
    `<path d="M5.2 5.4h6.2v6.2H5.2V5.4Zm7.4 1.6V13H7v1.6h7.2V7H12.6Z" fill="#fff"/>`,
  ),
  portfolio: tile(
    "#6366F1",
    `<path d="M9 3.4a5.6 5.6 0 1 1 0 11.2 5.6 5.6 0 0 1 0-11.2Zm0 1.6v4.2l3.6 2.1-.8 1.4L8 9.4V5h1Z" fill="#fff"/>`,
  ),
  trading: tile(
    "#22C55E",
    `<path d="M4 11.2h2.2V14H4v-2.8Zm3.9-4h2.2V14H7.9V7.2Zm3.9-3.4H14V14h-2.2V3.8Z" fill="#fff"/>`,
  ),
  analytics: tile(
    "#06B6D4",
    `<path d="M3.6 12.6 7 8.8l2.4 2.2 4.8-5.6.9.8-5.6 6.6-2.4-2.2-2.6 2.8-.9-.8Z" fill="#fff"/>`,
  ),
  calendar: tile(
    "#F97316",
    `<path d="M5 3.4h1.4V4.8h5.2V3.4H13V4.8h1.4v10H3.6v-10H5V3.4Zm8 4H5v5.6h8V7.4Z" fill="#fff"/>`,
  ),
  brokers: tile(
    "#64748B",
    `<path d="M3.6 14V7.2L9 3.6l5.4 3.6V14h-2.4V9.2H6v4.8H3.6Zm4 0h2.8v-3.2H7.6V14Z" fill="#fff"/>`,
  ),
  subscriptions: tile(
    "#10B981",
    `<path d="M3.6 5.6h10.8v7.2H3.6V5.6Zm1.6 3.2v1.4h4V8.8h-4Z" fill="#fff"/>`,
  ),
  settings: tile(
    "#475569",
    `<path d="M7.6 3.2h2.8l.5 1.7 1.6.5 1.5-.9 1.6 1.6-.9 1.5.5 1.6 1.7.5v2.8l-1.7.5-.5 1.6.9 1.5-1.6 1.6-1.5-.9-1.6.5-.5 1.7H7.6l-.5-1.7-1.6-.5-1.5.9-1.6-1.6.9-1.5-.5-1.6L1.1 10.6V7.8l1.7-.5.5-1.6-.9-1.5L4 2.6l1.5.9 1.6-.5.5-1.8Zm1.4 4.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z" fill="#fff"/>`,
  ),
  "learn-futures": tile(
    "#2563EB",
    `<path d="M4 4.2h10v1.6H9.8v8H8.2v-8H4V4.2Zm0 9.2h10V15H4v-1.6Z" fill="#fff"/>`,
  ),
  "learn-cfds": tile(
    "#7C3AED",
    `<path d="M9 3.4c2.8 0 5 1.6 5 3.6S11.8 10.6 9 10.6 4 9 4 7s2.2-3.6 5-3.6Zm-3.4 7.2c.8.6 1.8 1 3.4 1s2.6-.4 3.4-1v2c0 2-2.2 3.4-3.4 3.4S5.6 14.6 5.6 12.6v-2Z" fill="#fff"/>`,
  ),
};

const more = {
  "learn-crypto": tile(
    "#DB2777",
    `<path d="M6.2 4.4h5.6l2 2v5.2l-2 2H6.2l-2-2V6.4l2-2Zm2 2.2v5h1.6v-5H8.2Z" fill="#fff"/>`,
  ),
  "position-sizing": tile(
    "#CA8A04",
    `<path d="M8.2 3.4h1.6v3.2l3.8 4.2H4.4l3.8-4.2V3.4ZM4 12.2h10v2.4H4v-2.4Z" fill="#fff"/>`,
  ),
  "prop-firm": tile(
    "#DC2626",
    `<path d="M9 3.4 14.2 5.4v4.2c0 3.2-2.2 4.8-5.2 5.6C6 14.4 3.8 12.8 3.8 9.6V5.4L9 3.4Z" fill="#fff"/>`,
  ),
  drawdown: tile(
    "#E11D48",
    `<path d="M3.8 5.2 8 9.2l2.2-2 4 4.6-.9.8-3.2-3.6-2.2 2-5-4.8.9-.8Zm8.4 6.2h2.6v2.6h-2.6v-2.6Z" fill="#fff"/>`,
  ),
  faq: tile(
    "#7C3AED",
    `<path d="M6.4 6.6c0-1.6 1.2-2.8 2.6-2.8s2.6 1.2 2.6 2.6c0 1.4-1 1.8-1.8 2.4-.6.4-.8.8-.8 1.6H7.4c0-1.4.4-2 1.2-2.6.8-.6 1.4-1 1.4-1.6 0-.8-.6-1.2-1.2-1.2S7.8 6 7.8 6.6H6.4ZM8.2 13h1.6v1.6H8.2V13Z" fill="#fff"/>`,
  ),
  "faq-account": tile(
    "#0284C7",
    `<path d="M9 3.8a2.6 2.6 0 1 1 0 5.2 2.6 2.6 0 0 1 0-5.2ZM4.4 14.4c0-2.4 2-4 4.6-4h.0c2.6 0 4.6 1.6 4.6 4v.2H4.4v-.2Z" fill="#fff"/>`,
  ),
  "faq-brokers": tile(
    "#57534E",
    `<path d="M3.8 13.8V8L9 4.4 14.2 8v5.8h-2.2V9.6H6v4.2H3.8Z" fill="#fff"/>`,
  ),
  "faq-algorithms": tile(
    "#A21CAF",
    `<path d="M5.6 4.4h6.8v2H14v1.8h-1.6v1.6H14v1.8h-1.6v2H5.6v-2H4v-1.8h1.6V9.8H4V8h1.6V6.2H4V4.4h1.6Z" fill="#fff"/>`,
  ),
  "faq-copy": tile(
    "#0D9488",
    `<path d="M4.6 5h6.6v6.6H4.6V5Zm8 2V13H7.2v1.6H14.2V7h-1.6Z" fill="#fff"/>`,
  ),
  start: tile(
    "#F59E0B",
    `<path d="M4.2 14 14.2 9 4.2 4v3.6L9.4 9 4.2 10.4V14Z" fill="#fff"/>`,
  ),
  platform: tile(
    "#2563EB",
    `<path d="M3.6 4h4.6v4.6H3.6V4Zm6.2 0H14.4v4.6H9.8V4ZM3.6 10.2h4.6V14.8H3.6v-4.6Zm6.2 0H14.4V14.8H9.8v-4.6Z" fill="#fff"/>`,
  ),
  account: tile(
    "#0EA5E9",
    `<path d="M9 3.6a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6ZM4.2 14.6c0-2.6 2.2-4.2 4.8-4.2h0c2.6 0 4.8 1.6 4.8 4.2v.2H4.2v-.2Z" fill="#fff"/>`,
  ),
  learn: tile(
    "#4F46E5",
    `<path d="M3.6 4.6 9 3.4l5.4 1.2v8.2L9 14.2l-5.4-1.4V4.6Zm5.4 1.2v7.2l3.8-.8V5.6L9 5.8Z" fill="#fff"/>`,
  ),
  discord: `<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" rx="3" fill="#5865F2"/><path fill="#fff" d="M13.86 5.12a9.4 9.4 0 0 0-2.32-.72.07.07 0 0 0-.07.03c-.1.18-.21.41-.29.6a8.7 8.7 0 0 0-2.6 0 6 6 0 0 0-.3-.6.07.07 0 0 0-.07-.03 9.4 9.4 0 0 0-2.32.72.07.07 0 0 0-.03.03C4.25 7.34 3.85 9.5 4.05 11.62a.08.08 0 0 0 .03.04 9.5 9.5 0 0 0 2.84 1.44.07.07 0 0 0 .08-.03c.17-.23.33-.48.46-.74a.07.07 0 0 0-.04-.1 6.2 6.2 0 0 1-.89-.42.07.07 0 0 1 0-.11c.06-.04.12-.09.18-.14a.07.07 0 0 1 .07 0c1.86.85 3.88.85 5.72 0a.07.07 0 0 1 .07 0c.06.05.12.1.18.14a.07.07 0 0 1 0 .11 5.8 5.8 0 0 1-.89.42.07.07 0 0 0-.04.1c.14.26.3.51.46.74a.07.07 0 0 0 .08.03 9.4 9.4 0 0 0 2.85-1.44.08.08 0 0 0 .03-.04c.24-2.46-.4-4.6-1.68-6.47a.06.06 0 0 0-.03-.03ZM7.8 10.36c-.56 0-1.02-.52-1.02-1.15s.45-1.15 1.02-1.15 1.03.52 1.02 1.15c0 .63-.45 1.15-1.02 1.15Zm3.78 0c-.56 0-1.02-.52-1.02-1.15s.45-1.15 1.02-1.15 1.03.52 1.02 1.15c0 .63-.45 1.15-1.02 1.15Z"/></svg>\n`,
  tradingview: `<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" rx="3" fill="#131722"/><path fill="#2962FF" d="M3.4 12.6 7.2 8.4l2.4 2.2 5-5.4.9.8-5.8 6.2-2.4-2.2-3 3.4-.9-.8Z"/><circle cx="7.2" cy="8.4" r="1.15" fill="#fff"/><circle cx="9.6" cy="10.6" r="1.15" fill="#fff"/><circle cx="14.2" cy="5.4" r="1.15" fill="#fff"/></svg>\n`,
};

Object.assign(icons, more);

for (const [name, svg] of Object.entries(icons)) {
  writeFileSync(join(dir, `${name}.svg`), svg);
}

console.log(`Wrote ${Object.keys(icons).length} icons to ${dir}`);
