import Link from "next/link";
import type { ReactNode } from "react";
import { DiscordIcon } from "../DiscordIcon";

type CardProps = {
  title: string;
  href?: string;
  icon?: string;
  children?: ReactNode;
};

export function Card({ title, href, icon, children }: CardProps) {
  const inner = (
    <>
      <p className="flex items-center gap-2 text-sm font-semibold text-text">
        {icon === "discord" ? <DiscordIcon size={16} /> : null}
        {title}
      </p>
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
