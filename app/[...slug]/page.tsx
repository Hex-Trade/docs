import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocPage } from "@/components/DocPage";
import { getDoc, getDocSlugs } from "@/lib/content";

export function generateStaticParams() {
  return getDocSlugs()
    .filter((slug) => slug !== "index")
    .map((slug) => ({ slug: [slug] }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const doc = getDoc(slug.join("/"));
    return {
      title: doc.frontmatter.title,
      description: doc.frontmatter.description,
    };
  } catch {
    return {};
  }
}

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = slug.join("/");

  if (slug.length !== 1) notFound();

  try {
    return <DocPage slug={path} />;
  } catch {
    notFound();
  }
}
