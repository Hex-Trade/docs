import { getDoc } from "@/lib/content";

export function GET() {
  const doc = getDoc("index");
  return new Response(doc.content, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
