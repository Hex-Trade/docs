import { NextResponse } from "next/server";
import { flatPages } from "@/lib/nav";
import { site } from "@/lib/site";

export async function GET() {
  const lines = [
    "# Hextrade Docs",
    `> ${site.description}`,
    "",
    `Docs: ${site.url}`,
    "Marketing site: https://hextrade.io",
    "Dashboard: https://dash.hextrade.io",
    "",
    "## Primary pages",
    `- ${site.url}/ : Algorithmic trading documentation home`,
    `- ${site.url}/quick-start : Get started`,
    `- ${site.url}/webhooks : TradingView webhook automation`,
    `- ${site.url}/algorithms : Algorithmic trading catalog`,
    `- ${site.url}/brokers : Supported brokers`,
    `- ${site.url}/copy-trading : Copy trading setup`,
    `- ${site.url}/portfolio : Portfolio builder`,
    `- ${site.url}/faq-tradingview : TradingView webhook FAQ`,
    "",
    "## All docs",
    ...flatPages.map((page) => {
      const url = page.href === "/" ? site.url : `${site.url}${page.href}`;
      return `- ${url} : ${page.title}`;
    }),
    "",
    "## Marketing counterparts",
    "- https://hextrade.io/algorithmic-trading",
    "- https://hextrade.io/tradingview-webhook-automation",
    "- https://hextrade.io/tradingview-to-tradovate",
    "- https://hextrade.io/tradingview-to-projectx",
    "- https://hextrade.io/compare/hextrade-vs-pickmytrade",
    "- https://hextrade.io/toolkit",
    "",
    `Sitemap: ${site.url}/sitemap.xml`,
  ];

  return new NextResponse(lines.join("\n") + "\n", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
