"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function FamilyScroll() {
  const family = useSearchParams().get("family");

  useEffect(() => {
    if (!family) return;
    const element = document.getElementById(family);
    if (element) element.scrollIntoView({ block: "center" });
  }, [family]);

  return null;
}
