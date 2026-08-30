import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

export function Accordion({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <details className="faq-item group border-b border-border last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-medium text-text [&::-webkit-details-marker]:hidden">
        <span>{title}</span>
        <ChevronDown
          size={16}
          className="shrink-0 text-muted transition group-open:rotate-180"
        />
      </summary>
      <div className="pb-4 text-[14px] leading-6 text-muted [&>p]:m-0 [&>p+p]:mt-2.5 [&>a]:text-accent">
        {children}
      </div>
    </details>
  );
}

export function AccordionGroup({ children }: { children: ReactNode }) {
  return (
    <div className="faq-group my-5 overflow-hidden rounded-xl border border-border bg-surface-2/50 px-4">
      {children}
    </div>
  );
}
