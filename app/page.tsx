import type { Metadata } from "next";
import { DocPage } from "@/components/DocPage";
import { getDoc } from "@/lib/content";

export function generateMetadata(): Metadata {
  const doc = getDoc("index");
  return {
    title: doc.frontmatter.title,
    description: doc.frontmatter.description,
  };
}

export default async function HomePage() {
  return <DocPage slug="index" />;
}
