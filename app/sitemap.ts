import type { MetadataRoute } from "next";
import { flatPages } from "@/lib/nav";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return flatPages.map((page) => {
    const path = page.href === "/" ? "" : page.href;
    const isHub =
      page.href === "/" ||
      page.href === "/webhooks" ||
      page.href === "/algorithms" ||
      page.href === "/quick-start" ||
      page.href === "/brokers";

    return {
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: page.href === "/" || page.href === "/webhooks" ? "weekly" : "monthly",
      priority: page.href === "/" ? 1 : isHub ? 0.9 : 0.7,
    };
  });
}
