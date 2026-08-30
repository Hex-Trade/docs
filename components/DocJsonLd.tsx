import JsonLd from "./JsonLd";
import { getPageBySlug, findGroupTitleForSlug } from "@/lib/nav";
import { site } from "@/lib/site";

const WEBHOOK_STEPS = [
  {
    name: "Copy your webhook URL",
    text: "On Accounts open Webhooks and copy the private HexTrade URL.",
  },
  {
    name: "Create a TradingView alert",
    text: "On the chart with your Pine strategy, click Add Alert.",
  },
  {
    name: "Paste the webhook URL and JSON payload",
    text: "Set the alert webhook URL to HexTrade and paste the JSON message with platformType and accountId.",
  },
  {
    name: "Test with one micro contract",
    text: "Fire a small test alert and confirm the fill in HexTrade execution logs before scaling.",
  },
];

export function DocJsonLd({
  slug,
  title,
  description,
}: {
  slug: string;
  title: string;
  description?: string;
}) {
  const page = getPageBySlug(slug);
  const path = page?.href ?? (slug === "index" ? "/" : `/${slug}`);
  const url = path === "/" ? site.url : `${site.url}${path}`;
  const group = findGroupTitleForSlug(slug);

  const data: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: title,
      description: description || site.description,
      url,
      author: { "@type": "Organization", name: "HexTrade", url: "https://hextrade.io" },
      publisher: {
        "@type": "Organization",
        name: "HexTrade",
        url: "https://hextrade.io",
        logo: { "@type": "ImageObject", url: `${site.url}/hex-logo.png` },
      },
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Docs", item: site.url },
        ...(group
          ? [{ "@type": "ListItem", position: 2, name: group, item: url }]
          : []),
        {
          "@type": "ListItem",
          position: group ? 3 : 2,
          name: title,
          item: url,
        },
      ],
    },
  ];

  if (slug === "webhooks") {
    data.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Set up TradingView webhook automation with HexTrade",
      description:
        "Connect a TradingView strategy alert to HexTrade so orders execute on your connected broker.",
      totalTime: "PT10M",
      step: WEBHOOK_STEPS.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.name,
        text: step.text,
      })),
    });
  }

  return <JsonLd data={data} />;
}
