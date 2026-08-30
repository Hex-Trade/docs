"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { findGroupForHref, nav, type NavGroup, type NavPage } from "@/lib/nav";
import { DiscordWidget } from "./DiscordWidget";
import { Logo } from "./Logo";
import { Search, type SearchItem } from "./Search";
import { ThemeToggle } from "./ThemeToggle";

const GROUPS_KEY = "hextrade-docs-open-groups";
const SUBGROUPS_KEY = "hextrade-docs-open-subgroups";

function writeList(key: string, list: string[]) {
  try {
    sessionStorage.setItem(key, JSON.stringify(list));
  } catch {
    /* ignore quota / private mode */
  }
}

function only(title: string | undefined) {
  return title ? [title] : [];
}

function PageLink({
  page,
  pathname,
  onNavigate,
  nested,
}: {
  page: NavPage;
  pathname: string;
  onNavigate?: () => void;
  nested?: boolean;
}) {
  const active = pathname === page.href;
  const PageIcon = page.icon;
  return (
    <Link
      href={page.href}
      onClick={onNavigate}
      className={`flex h-7 items-center gap-2 rounded-md text-[13px] transition ${
        nested ? "pl-5 pr-2" : "pl-3 pr-2"
      } ${
        active
          ? "bg-accent-dim font-medium text-accent"
          : "text-muted hover:bg-surface-2 hover:text-text"
      }`}
    >
      {page.image ? (
        <img
          src={page.image}
          alt=""
          width={14}
          height={14}
          className="block h-3.5 w-3.5 shrink-0 rounded-[3px] object-contain object-center"
        />
      ) : (
        <PageIcon
          size={13}
          strokeWidth={2.25}
          className={`shrink-0 ${active ? "" : "text-text"}`}
        />
      )}
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
  const groupTitle = match?.group.title;
  const subgroupTitle = match?.subgroup?.title;
  const [openGroups, setOpenGroups] = useState<string[]>(() => only(groupTitle));
  const [openSubGroups, setOpenSubGroups] = useState<string[]>(() => only(subgroupTitle));

  useEffect(() => {
    const groups = only(groupTitle);
    const subgroups = only(subgroupTitle);
    setOpenGroups(groups);
    setOpenSubGroups(subgroups);
    writeList(GROUPS_KEY, groups);
    writeList(SUBGROUPS_KEY, subgroups);
  }, [groupTitle, subgroupTitle]);

  const toggleGroup = useCallback((title: string) => {
    setOpenGroups((prev) => {
      const next = prev.includes(title) ? [] : [title];
      writeList(GROUPS_KEY, next);
      return next;
    });
  }, []);

  const toggleSubGroup = useCallback((title: string) => {
    setOpenSubGroups((prev) => {
      const next = prev.includes(title) ? [] : [title];
      writeList(SUBGROUPS_KEY, next);
      return next;
    });
  }, []);

  const renderPages = (pages: NavPage[] | undefined, nested = false) =>
    pages?.length ? (
      <ul className="mt-0.5 space-y-px">
        {pages.map((page) => (
          <li key={page.href}>
            <PageLink page={page} pathname={pathname} onNavigate={onNavigate} nested={nested} />
          </li>
        ))}
      </ul>
    ) : null;

  const renderGroup = (group: NavGroup) => {
    const expanded = openGroups.includes(group.title);
    return (
      <div key={group.title} className="mb-1.5">
        <button
          type="button"
          onClick={() => toggleGroup(group.title)}
          className="flex h-8 w-full cursor-pointer items-center justify-between rounded-lg px-2 text-[13px] font-medium text-text transition hover:bg-surface-2"
        >
          <span>{group.title}</span>
          <ChevronDown
            size={14}
            className={`shrink-0 text-muted transition ${expanded ? "" : "-rotate-90"}`}
          />
        </button>
        {expanded ? (
          <div className="mt-0.5 border-l border-border ml-3">
            {renderPages(group.pages)}
            {group.groups?.map((subgroup) => {
              const subOpen = openSubGroups.includes(subgroup.title);
              const SubIcon = subgroup.icon;
              return (
                <div key={subgroup.title} className="mt-0.5">
                  <button
                    type="button"
                    onClick={() => toggleSubGroup(subgroup.title)}
                    className="flex h-7 w-full cursor-pointer items-center justify-between rounded-md pl-3 pr-2 text-[13px] text-muted transition hover:bg-surface-2 hover:text-text"
                  >
                    <span className="flex items-center gap-2">
                      <SubIcon size={13} strokeWidth={2.25} className="shrink-0 text-text" />
                      {subgroup.title}
                    </span>
                    <ChevronDown
                      size={13}
                      className={`shrink-0 text-muted transition ${subOpen ? "" : "-rotate-90"}`}
                    />
                  </button>
                  {subOpen ? renderPages(subgroup.pages, true) : null}
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
