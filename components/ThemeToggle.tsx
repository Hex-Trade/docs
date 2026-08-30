"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  function toggle() {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-lg p-2 text-muted transition hover:bg-surface-2 hover:text-text"
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
    >
      {light ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
