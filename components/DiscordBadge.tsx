"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { DiscordIcon } from "./DiscordIcon";

export function DiscordBadge({
  initialOnline = 245,
  initialMembers = 500,
}: {
  initialOnline?: number;
  initialMembers?: number;
}) {
  const [online, setOnline] = useState(initialOnline);
  const [members, setMembers] = useState(initialMembers);

  useEffect(() => {
    fetch("/api/discord")
      .then((response) => response.json())
      .then((data: { online?: number; members?: number }) => {
        if (typeof data.online === "number") setOnline(data.online);
        if (typeof data.members === "number") setMembers(data.members);
      })
      .catch(() => undefined);
  }, []);

  return (
    <a
      href={site.discord}
      target="_blank"
      rel="noreferrer"
      className="discord-badge my-4 flex w-full flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface-2 px-4 py-3 no-underline transition hover:border-accent/40 hover:bg-surface"
    >
      <span className="flex items-start gap-3">
        <DiscordIcon size={28} className="rounded-md" />
        <span>
          <span className="block text-sm font-semibold text-text">Ask a question</span>
          <span className="mt-0.5 block text-[13px] leading-5 text-muted">
            Get help from the community and the team.
          </span>
        </span>
      </span>
      <span className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-text">
          <span className="h-1.5 w-1.5 rounded-full bg-[#23a559]" />
          {online.toLocaleString()} online
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-text">
          <span className="h-1.5 w-1.5 rounded-full bg-[#80848e]" />
          {members.toLocaleString()} members
        </span>
      </span>
    </a>
  );
}
