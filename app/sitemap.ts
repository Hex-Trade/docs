import type { MetadataRoute } from "next";
import { flatPages } from "@/lib/nav";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return flatPages.map((page) => {
    const path = page.href === "/" ? "" : page.href;
    const p0 = new Set(["/", "/webhooks", "/quick-start"]);
    const p1 = new Set([
      "/algorithms",
      "/brokers",
      "/copy-trading",
      "/faq-tradingview",
      "/pine-script-alerts",
      "/webhook-troubleshooting",
      "/symbol-mapping",
      "/tradovate-webhook",
    ]);
    const p2 = new Set([
      "/tradovate",
      "/projectx",
      "/ninjatrader",
      "/rithmic",
      "/tradelocker",
      "/hyperliquid",
      "/mt5",
    ]);

    let priority = 0.7;
    if (page.href === "/") priority = 1;
    else if (p0.has(page.href)) priority = 0.95;
    else if (p1.has(page.href)) priority = 0.9;
    else if (p2.has(page.href)) priority = 0.85;

    return {
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: page.href === "/" || page.href === "/webhooks" ? "weekly" : "monthly",
      priority,
    };
  });
}
