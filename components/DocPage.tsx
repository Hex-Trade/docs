import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getAllDocs, getDoc } from "@/lib/content";
import { getDiscordOnline } from "@/lib/discord";
import { findGroupTitleForSlug, getPageBySlug } from "@/lib/nav";
import { DocsShell } from "./DocsShell";
import { FamilyScroll } from "./FamilyScroll";
import { mdxComponents } from "./mdx";
import { PrevNext } from "./PrevNext";

export async function DocPage({ slug }: { slug: string }) {
  const doc = getDoc(slug);
  const discordOnline = await getDiscordOnline();
  const searchItems = getAllDocs().map((item) => {
    const page = getPageBySlug(item.slug);
    return {
      title: item.frontmatter.title,
      href: page?.href ?? `/${item.slug}`,
      description: item.frontmatter.description,
      group: findGroupTitleForSlug(item.slug),
      headings: item.headings,
    };
  });

  return (
    <DocsShell slug={slug} headings={doc.headings} searchItems={searchItems} discordOnline={discordOnline}>
      {slug === "algorithms" ? (
        <Suspense>
          <FamilyScroll />
        </Suspense>
      ) : null}
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">HEXTRADE</p>
      <h1>{doc.frontmatter.title}</h1>
      {doc.frontmatter.description ? <p className="mt-0 mb-6 text-muted">{doc.frontmatter.description}</p> : null}
      <div className="docs-prose">
        <MDXRemote
          source={doc.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeSlug],
            },
          }}
        />
      </div>
      <PrevNext slug={slug} />
    </DocsShell>
  );
}
