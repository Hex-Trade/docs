import type { Metadata } from "next";
import { DocPage } from "@/components/DocPage";
import { getDoc } from "@/lib/content";
import { buildDocMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  const doc = getDoc("index");
  return buildDocMetadata({
    title: doc.frontmatter.seoTitle ?? doc.frontmatter.title,
    description: doc.frontmatter.description,
    path: "/",
    keywords: doc.frontmatter.keywords,
  });
}

export default async function HomePage() {
  return <DocPage slug="index" />;
}
