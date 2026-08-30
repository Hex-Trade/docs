"use client";

import { useEffect, useState } from "react";
import { DiscordIcon } from "./DiscordIcon";

export function DiscordWidget({ initialOnline }: { initialOnline: number }) {
  const [online, setOnline] = useState(initialOnline);

  useEffect(() => {
    fetch("/api/discord")
      .then((response) => response.json())
      .then((data: { online?: number }) => {
        if (typeof data.online === "number") setOnline(data.online);
      })
      .catch(() => undefined);
  }, []);

  return (
    <a
      href="https://discord.com/invite/hextrade"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 rounded-lg px-2 py-1 text-sm text-muted transition hover:bg-surface-2 hover:text-text"
    >
      <DiscordIcon size={18} />
      <span>Hex Trade</span>
      <span className="flex items-center gap-1.5 whitespace-nowrap">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="text-sm text-text">{online} online</span>
      </span>
    </a>
  );
}
