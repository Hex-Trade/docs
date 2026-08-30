"use client";

import Fuse from "fuse.js";
import { CornerDownLeft, FileText, Hash, Search as SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type SearchItem = {
  title: string;
  href: string;
  description?: string;
  group?: string;
  headings: { title: string; id: string }[];
};

type ResultRow = {
  kind: "page" | "heading";
  title: string;
  href: string;
  crumb: string;
};

function flattenItems(items: SearchItem[]): ResultRow[] {
  return items.flatMap((item) => [
    {
      kind: "page" as const,
      title: item.title,
      href: item.href,
      crumb: item.group ? `${item.group} > ${item.title}` : item.title,
    },
    ...item.headings.map((heading) => ({
      kind: "heading" as const,
      title: heading.title,
      href: `${item.href}#${heading.id}`,
      crumb: item.title,
    })),
  ]);
}

function Highlight({ text, query }: { text: string; query: string }) {
  const words = query.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return text;

  const pattern = words.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const parts = text.split(new RegExp(`(${pattern})`, "ig"));

  return parts.map((part, index) =>
    words.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
      <span key={index} className="text-accent">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex h-5 min-w-[1.4rem] items-center justify-center rounded-md border border-border bg-surface-2 px-1.5 text-[10px] font-medium tracking-wide text-muted">
      {children}
    </kbd>
  );
}

export function Search({
  items,
  variant = "sidebar",
}: {
  items: SearchItem[];
  variant?: "sidebar" | "bar";
}) {
  const router = useRouter();
  const listRef = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [shortcut, setShortcut] = useState("Ctrl K");
  const [mounted, setMounted] = useState(false);

  const rows = useMemo(() => flattenItems(items), [items]);
  const fuse = useMemo(
    () =>
      new Fuse(rows, {
        keys: ["title", "crumb"],
        threshold: 0.32,
        ignoreLocation: true,
      }),
    [rows],
  );

  const results = query.trim()
    ? fuse.search(query).map((result) => result.item)
    : rows.filter((row) => row.kind === "page").slice(0, 6);

  useEffect(() => {
    setMounted(true);
    if (navigator.platform.toUpperCase().includes("MAC")) setShortcut("⌘K");
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query, open]);

  useEffect(() => {
    const selected = listRef.current?.querySelector<HTMLElement>("[data-active='true']");
    selected?.scrollIntoView({ block: "nearest" });
  }, [active, results.length]);

  function close() {
    setOpen(false);
    setQuery("");
    setActive(0);
  }

  function go(href: string) {
    close();
    router.push(href);
  }

  function onPaletteKey(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => (results.length === 0 ? 0 : (index + 1) % results.length));
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => (results.length === 0 ? 0 : (index - 1 + results.length) % results.length));
      return;
    }
    if (event.key === "Enter" && results[active]) {
      event.preventDefault();
      go(results[active].href);
    }
  }

  const overlay =
    open && mounted
      ? createPortal(
          <div className="fixed inset-0 z-[80]" onClick={close}>
            <div className="search-overlay absolute inset-0" />
            <div className="relative flex items-start justify-center px-4 pt-[18vh]">
              <div
                className="w-full max-w-[560px] overflow-hidden rounded-2xl border border-border bg-surface/95 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
                onClick={(event) => event.stopPropagation()}
              >
                <label className="flex items-center gap-3 px-4 py-3.5">
                  <SearchIcon size={16} className="shrink-0 text-muted" />
                  <input
                    autoFocus
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    onKeyDown={onPaletteKey}
                    placeholder="Search Hextrade docs..."
                    className="w-full bg-transparent text-[15px] text-text outline-none placeholder:text-muted"
                  />
                  <Kbd>ESC</Kbd>
                </label>

                <div className="border-t border-border">
                  <ul ref={listRef} className="max-h-[22rem] overflow-y-auto p-1.5">
                    {results.length === 0 ? (
                      <li className="flex items-center gap-3 px-3 py-2.5 text-sm text-muted">
                        <CornerDownLeft size={15} className="shrink-0" />
                        No matches
                      </li>
                    ) : (
                      results.map((item, index) => {
                        const Icon = query.trim()
                          ? item.kind === "heading"
                            ? Hash
                            : FileText
                          : CornerDownLeft;
                        const selected = index === active;
                        return (
                          <li key={`${item.href}-${item.title}`}>
                            <button
                              type="button"
                              data-active={selected}
                              onMouseEnter={() => setActive(index)}
                              onClick={() => go(item.href)}
                              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left ${
                                selected ? "bg-surface-2" : "hover:bg-surface-2/70"
                              }`}
                            >
                              <Icon size={15} className="shrink-0 text-muted" />
                              <span className="min-w-0 flex-1">
                                <span className="block text-sm text-text">
                                  {query.trim() ? (
                                    <Highlight text={item.title} query={query} />
                                  ) : (
                                    item.title
                                  )}
                                </span>
                                {query.trim() ? (
                                  <span className="mt-0.5 block truncate text-xs text-muted">{item.crumb}</span>
                                ) : null}
                              </span>
                              {selected ? <span className="text-xs text-muted">Go to page</span> : null}
                            </button>
                          </li>
                        );
                      })
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          variant === "bar"
            ? "flex h-9 w-full max-w-md items-center gap-2 rounded-lg border border-border bg-surface/80 px-3 text-left text-sm text-muted transition hover:border-border-strong"
            : "flex w-full items-center gap-2 rounded-lg border border-border bg-bg px-3 py-2 text-left text-sm text-muted transition hover:border-border-strong"
        }
      >
        <SearchIcon size={14} />
        <span className="flex-1">Search docs...</span>
        <Kbd>{shortcut}</Kbd>
      </button>
      {overlay}
    </>
  );
}
