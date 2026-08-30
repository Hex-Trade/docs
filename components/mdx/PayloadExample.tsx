import type { ReactNode } from "react";
import { getPlatform } from "@/lib/platforms";
import { PlatformIcon } from "./PlatformIcon";

export function PayloadExample({
  slug,
  symbol,
  children,
}: {
  slug: string;
  symbol: string;
  children?: ReactNode;
}) {
  const platform = getPlatform(slug);
  if (!platform) return null;

  return (
    <div className="payload-example my-5 overflow-hidden rounded-xl border border-border">
      <div className="flex items-center gap-2.5 bg-surface-2 px-3.5 py-2.5">
        <PlatformIcon slug={slug} size={22} />
        <span className="text-sm font-semibold text-text">{platform.name}</span>
        <span className="rounded-md border border-border bg-surface px-1.5 py-0.5 text-xs font-medium text-muted">
          {symbol}
        </span>
      </div>
      {children}
    </div>
  );
}
