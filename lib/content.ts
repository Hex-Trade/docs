import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { extractHeadings, type Heading } from "./headings";
import { findGroupTitleForSlug, getPageBySlug } from "./nav";
import type { SearchItem } from "@/components/Search";

const CONTENT_DIR = path.join(process.cwd(), "content", "docs");

export type DocFrontmatter = {
  title: string;
  description?: string;
  seoTitle?: string;
  keywords?: string[];
};

export type Doc = {
  slug: string;
  frontmatter: DocFrontmatter;
  content: string;
  headings: Heading[];
};

export function getDocSlugs() {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getDoc(slug: string): Doc {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as DocFrontmatter,
    content,
    headings: extractHeadings(content),
  };
}

export function getAllDocs() {
  return getDocSlugs().map(getDoc);
}

export function getSearchItems(): SearchItem[] {
  return getAllDocs().map((item) => {
    const page = getPageBySlug(item.slug);
    return {
      title: item.frontmatter.title,
      href: page?.href ?? `/${item.slug}`,
      description: item.frontmatter.description,
      group: findGroupTitleForSlug(item.slug),
      headings: item.headings,
    };
  });
}
