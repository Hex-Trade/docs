import { getDoc, getDocSlugs } from "@/lib/content";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  if (!getDocSlugs().includes(slug)) {
    return new Response("Not found", { status: 404 });
  }

  const doc = getDoc(slug);
  return new Response(doc.content, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
