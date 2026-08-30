import { Children, isValidElement, type ReactNode } from "react";

export function Step({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div>
      <p className="font-semibold text-text">{title}</p>
      {children ? <div className="mt-1 text-sm leading-6 text-muted [&>p]:m-0">{children}</div> : null}
    </div>
  );
}

export function Steps({ children }: { children: ReactNode }) {
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <ol className="my-5 space-y-4">
      {items.map((child, index) => (
        <li key={index} className="flex gap-3">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent-dim text-xs font-semibold text-accent">
            {index + 1}
          </span>
          <div className="min-w-0 flex-1">{child}</div>
        </li>
      ))}
    </ol>
  );
}
