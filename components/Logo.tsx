import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <img
        src="/hex-logo.png"
        alt="Hextrade"
        width={36}
        height={36}
        className="h-9 w-9 object-contain"
      />
      <span className="flex items-baseline gap-2">
        <span className="text-[15px] font-semibold tracking-[0.18em] text-text">HEXTRADE</span>
        {compact ? null : <span className="text-[13px] font-medium text-muted">Docs</span>}
      </span>
    </Link>
  );
}
