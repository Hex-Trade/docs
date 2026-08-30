"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import type { SearchItem } from "./Search";
import { Sidebar } from "./Sidebar";

export function DocsShell({
  searchItems,
  discordOnline,
  children,
}: {
  searchItems: SearchItem[];
  discordOnline: number;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="page-gradient">
      <div className="mx-auto flex max-w-[1500px]">
        <aside className="sidebar-scale sticky top-0 hidden h-screen w-[272px] shrink-0 lg:block">
          <Sidebar items={searchItems} discordOnline={discordOnline} />
        </aside>

        {open ? (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
            <aside className="relative h-full w-72 border-r border-border bg-bg">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-4 z-10 rounded-md p-1 text-muted"
                aria-label="Close navigation"
              >
                <X size={18} />
              </button>
              <Sidebar items={searchItems} discordOnline={discordOnline} onNavigate={() => setOpen(false)} />
            </aside>
          </div>
        ) : null}

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-bg/80 px-4 py-3 backdrop-blur lg:hidden">
            <button type="button" onClick={() => setOpen(true)} className="rounded-md p-1 text-muted" aria-label="Open navigation">
              <Menu size={18} />
            </button>
            <Logo compact />
            <a href="https://dash.hextrade.io" className="text-sm text-accent">
              Dashboard
            </a>
          </header>
          {children}
        </div>
      </div>
    </div>
  );
}
