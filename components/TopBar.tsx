"use client";

import { DiscordWidget } from "./DiscordWidget";
import { Logo } from "./Logo";
import { Search, type SearchItem } from "./Search";
import { ThemeToggle } from "./ThemeToggle";

export function TopBar({ items, discordOnline }: { items: SearchItem[]; discordOnline: number }) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg/55 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center gap-3 px-4 lg:px-6">
        <Logo />
        <div className="mx-2 hidden min-w-0 flex-1 justify-center md:flex">
          <Search items={items} variant="bar" />
        </div>
        <div className="ml-auto flex items-center gap-3 text-sm">
          <a href="https://dash.hextrade.io" className="hidden text-muted transition hover:text-text sm:inline">
            Dashboard
          </a>
          <a href="https://dash.hextrade.io/signup" className="hidden text-muted transition hover:text-text sm:inline">
            Register Free
          </a>
          <DiscordWidget initialOnline={discordOnline} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
