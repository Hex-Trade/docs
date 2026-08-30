import Link from "next/link";
import type { ReactNode } from "react";

type CardProps = {
  title: string;
  href?: string;
  children?: ReactNode;
};

export function Card({ title, href, children }: CardProps) {
  const inner = (
    <>
      <p className="text-sm font-semibold text-text">{title}</p>
      {children ? <div className="mt-1 text-[13px] leading-5 text-muted [&>p]:m-0">{children}</div> : null}
    </>
  );

  const className =
    "block rounded-lg border border-border bg-surface-2 px-3 py-2.5 transition hover:border-accent/40 hover:bg-surface";

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a href={href} className={className} target="_blank" rel="noreferrer">
          {inner}
        </a>
      );
    }

    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  return <div className={className}>{inner}</div>;
}

export function Cards({ children }: { children: ReactNode }) {
  return <div className="my-3 grid gap-2 sm:grid-cols-2">{children}</div>;
}
