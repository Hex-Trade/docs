"use client";

import { useMemo, useState } from "react";
import { families } from "@/lib/algorithms";

export function AlgorithmCatalog() {
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return families;
    return families.filter((family) =>
      [family.name, family.instruments, family.notes, ...family.ids]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  return (
    <div className="my-5">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Filter by family, instrument, or ID…"
        className="mb-3 w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-text outline-none placeholder:text-muted focus:border-accent"
      />
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-surface-2 text-text">
              <th className="px-3 py-2.5 font-semibold">Family</th>
              <th className="px-3 py-2.5 font-semibold">Variants</th>
              <th className="px-3 py-2.5 font-semibold">Instruments</th>
              <th className="px-3 py-2.5 font-semibold">IDs</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((family) => (
              <tr key={family.slug} id={family.slug} className="scroll-mt-24 border-t border-border">
                <td className="px-3 py-2.5 font-medium text-text">
                  {family.name}
                  {family.notes ? <p className="mt-0.5 text-xs font-normal text-muted">{family.notes}</p> : null}
                </td>
                <td className="px-3 py-2.5 text-muted">{family.variants}</td>
                <td className="px-3 py-2.5 text-muted">{family.instruments}</td>
                <td className="px-3 py-2.5">
                  <div className="flex flex-wrap gap-1">
                    {family.ids.map((id) => (
                      <code key={id} className="rounded border border-border bg-bg px-1.5 py-0.5 text-[11px] text-text">
                        {id}
                      </code>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
