import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getDoc } from "@/lib/content";
import { FamilyScroll } from "./FamilyScroll";
import { mdxComponents } from "./mdx";
import { PageActions } from "./PageActions";
import { PrevNext } from "./PrevNext";
import { Toc } from "./Toc";

export async function DocPage({ slug }: { slug: string }) {
  const doc = getDoc(slug);

  return (
    <div className="flex gap-10 px-4 py-6 lg:px-10 lg:py-10">
      <main className="min-w-0 flex-1">
        <div className="rounded-3xl bg-surface/90 p-6 sm:p-8 lg:p-12">
          {slug === "algorithms" ? (
            <Suspense>
              <FamilyScroll />
            </Suspense>
          ) : null}
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
        </div>
      </main>
      <aside className="sticky top-8 hidden h-fit w-56 shrink-0 xl:block">
        <Toc headings={doc.headings} />
        <PageActions slug={slug} />
      </aside>
    </div>
  );
}
