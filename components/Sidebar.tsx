"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { findGroupForHref, nav, type NavGroup, type NavPage } from "@/lib/nav";
import { DiscordWidget } from "./DiscordWidget";
import { Logo } from "./Logo";
import { Search, type SearchItem } from "./Search";
import { ThemeToggle } from "./ThemeToggle";

function PageLink({
  page,
  pathname,
  onNavigate,
}: {
  page: NavPage;
  pathname: string;
  onNavigate?: () => void;
}) {
  const active = pathname === page.href;
  const PageIcon = page.icon;
  return (
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
  );
}

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
  const match = findGroupForHref(pathname);
  const [openGroup, setOpenGroup] = useState<string | null>(match?.group.title ?? null);
  const [openSubGroup, setOpenSubGroup] = useState<string | null>(match?.subgroup?.title ?? null);

  useEffect(() => {
    if (match?.group.title) setOpenGroup(match.group.title);
    if (match?.subgroup?.title) setOpenSubGroup(match.subgroup.title);
  }, [match?.group.title, match?.subgroup?.title]);

  const renderPages = (pages: NavPage[] | undefined) =>
    pages?.length ? (
      <ul className="mt-0.5 space-y-0.5">
        {pages.map((page) => (
          <li key={page.href}>
            <PageLink page={page} pathname={pathname} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
    ) : null;

  const renderGroup = (group: NavGroup) => {
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
          <div className="mt-0.5">
            {renderPages(group.pages)}
            {group.groups?.map((subgroup) => {
              const subOpen = openSubGroup === subgroup.title;
              return (
                <div key={subgroup.title} className="mt-0.5">
                  <button
                    type="button"
                    onClick={() => setOpenSubGroup(subOpen ? null : subgroup.title)}
                    className="flex h-8 w-full items-center justify-between rounded-lg px-2.5 pl-4 text-[13px] text-muted transition hover:bg-surface-2 hover:text-text"
                  >
                    <span>{subgroup.title}</span>
                    <ChevronDown
                      size={14}
                      className={`shrink-0 text-muted transition ${subOpen ? "" : "-rotate-90"}`}
                    />
                  </button>
                  {subOpen ? <div className="pl-2">{renderPages(subgroup.pages)}</div> : null}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <div className="flex h-full flex-col">
      <div className="px-5 pb-4 pt-5">
        <Logo />
        <div className="mt-5">
          <Search items={items} />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-6">{nav.map(renderGroup)}</nav>

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
