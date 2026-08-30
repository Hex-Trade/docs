"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { DiscordIcon } from "./DiscordIcon";

export function DiscordBadge() {
  const [online, setOnline] = useState(245);
  const [members, setMembers] = useState(500);

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
      className="discord-badge my-4 block max-w-sm rounded-xl border border-border bg-[#1e2124] p-4 no-underline transition hover:border-[#5865F2]/50"
    >
      <div className="flex items-center gap-3">
        <DiscordIcon size={40} className="rounded-xl" />
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-[#b5bac1]">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#23a559]" />
            {online.toLocaleString()} online
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#80848e]" />
            {members.toLocaleString()} members
          </span>
        </div>
      </div>
      <span className="mt-4 flex h-10 items-center justify-center rounded-xl bg-[#5865F2] text-sm font-semibold text-white">
        Ask a question
      </span>
    </a>
  );
}
