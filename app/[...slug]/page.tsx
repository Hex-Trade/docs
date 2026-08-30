import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocPage } from "@/components/DocPage";
import { getDoc, getDocSlugs } from "@/lib/content";
import { getPageBySlug } from "@/lib/nav";
import { buildDocMetadata } from "@/lib/seo";

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
    const path = slug.join("/");
    const doc = getDoc(path);
    const page = getPageBySlug(doc.slug);
    return buildDocMetadata({
      title: doc.frontmatter.seoTitle ?? doc.frontmatter.title,
      description: doc.frontmatter.description,
      path: page?.href ?? `/${path}`,
      keywords: doc.frontmatter.keywords,
    });
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
