import type { Metadata } from "next";
import { site } from "./site";

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return site.url;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildDocMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const desc =
    description ||
    "Official Hextrade documentation for algorithmic trading and TradingView webhook automation.";

  return {
    title,
    description: desc,
    keywords,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: site.name,
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      creator: "@hextradeio",
    },
  };
}
