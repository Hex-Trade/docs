"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/headings";

export function Toc({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    for (const heading of headings) {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">On this page</p>
      <ul className="space-y-1.5 border-l border-border">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block border-l -ml-px py-0.5 text-[13px] leading-5 transition ${
                heading.level === 3 ? "pl-6" : "pl-3"
              } ${active === heading.id ? "border-accent text-accent" : "border-transparent text-muted hover:text-text"}`}
            >
              {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
