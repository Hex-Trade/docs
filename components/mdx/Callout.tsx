import type { ReactNode } from "react";

type CalloutProps = {
  children: ReactNode;
};

const styles = {
  note: "border-border bg-surface-2 text-muted",
  tip: "border-accent/30 bg-accent-dim text-text",
  warning: "border-amber-500/30 bg-amber-500/8 text-amber-100",
};

function Shell({ kind, label, children }: CalloutProps & { kind: keyof typeof styles; label: string }) {
  return (
    <div className={`my-4 rounded-xl border px-4 py-3 text-sm leading-6 ${styles[kind]}`}>
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-text">{label}</p>
      <div className="[&>p]:m-0">{children}</div>
    </div>
  );
}

export function Note({ children }: CalloutProps) {
  return (
    <Shell kind="note" label="Note">
      {children}
    </Shell>
  );
}

export function Tip({ children }: CalloutProps) {
  return (
    <Shell kind="tip" label="Tip">
      {children}
    </Shell>
  );
}

export function Warning({ children }: CalloutProps) {
  return (
    <Shell kind="warning" label="Warning">
      {children}
    </Shell>
  );
}
