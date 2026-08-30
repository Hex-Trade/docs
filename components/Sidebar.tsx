"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/nav";
import { DiscordWidget } from "./DiscordWidget";
import { Logo } from "./Logo";
import { Search, type SearchItem } from "./Search";
import { ThemeToggle } from "./ThemeToggle";

export function Sidebar({
  items,
  discordOnline,
  onNavigate,
}: {
  items: SearchItem[];
  discordOnline: number;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const activeGroup = nav.find((group) => group.pages.some((page) => page.href === pathname))?.title;
  const [openGroup, setOpenGroup] = useState<string | null>(activeGroup ?? null);

  useEffect(() => {
    if (!activeGroup) return;
    setOpenGroup(activeGroup);
  }, [activeGroup]);

  return (
    <div className="flex h-full flex-col">
      <div className="px-5 pb-4 pt-5">
        <Logo />
        <div className="mt-5">
          <Search items={items} />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-6">
        {nav.map((group) => {
          const expanded = openGroup === group.title;
          return (
            <div key={group.title} className="mb-1">
              <button
                type="button"
                onClick={() => setOpenGroup(expanded ? null : group.title)}
                className="flex h-8 w-full items-center justify-between rounded-lg px-2.5 text-[13px] text-text transition hover:bg-surface-2"
              >
                <span>{group.title}</span>
                <ChevronDown
                  size={14}
                  className={`shrink-0 text-muted transition ${expanded ? "" : "-rotate-90"}`}
                />
              </button>
              {expanded ? (
                <ul className="mt-0.5 space-y-0.5">
                  {group.pages.map((page) => {
                    const active = pathname === page.href;
                    const PageIcon = page.icon;
                    return (
                      <li key={page.href}>
                        <Link
                          href={page.href}
                          onClick={onNavigate}
                          className={`flex h-8 items-center gap-2.5 rounded-lg px-2.5 text-[13px] transition ${
                            active
                              ? "bg-accent-dim font-medium text-accent"
                              : "text-muted hover:bg-surface-2 hover:text-text"
                          }`}
                        >
                          <PageIcon size={14} strokeWidth={1.75} className="shrink-0" />
                          {page.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          );
        })}
      </nav>

      <div className="space-y-2 border-t border-border p-4">
        <DiscordWidget initialOnline={discordOnline} />
        <div className="flex items-center gap-2 px-1 text-[13px]">
          <a href="https://dash.hextrade.io" className="text-muted transition hover:text-text">
            Dashboard
          </a>
          <span className="text-border-strong">·</span>
          <a href="https://dash.hextrade.io/signup" className="text-muted transition hover:text-text">
            Register
          </a>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
