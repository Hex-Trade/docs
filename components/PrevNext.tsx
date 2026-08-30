import Link from "next/link";
import { getAdjacentPages } from "@/lib/nav";

export function PrevNext({ slug }: { slug: string }) {
  const { prev, next } = getAdjacentPages(slug);

  return (
    <div className="mt-12 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
      {prev ? (
        <Link
          href={prev.href}
          className="rounded-xl border border-border bg-surface-2 px-4 py-3 transition hover:border-accent/40"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Previous</p>
          <p className="mt-1 text-sm font-medium text-text">{prev.title}</p>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.href}
          className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-right transition hover:border-accent/40"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Next</p>
          <p className="mt-1 text-sm font-medium text-text">{next.title}</p>
        </Link>
      ) : null}
    </div>
  );
}
