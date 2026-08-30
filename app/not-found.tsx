import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-gradient flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">404</p>
        <h1 className="mt-2 text-2xl font-semibold">Page not found</h1>
        <p className="mt-2 text-sm text-muted">That path is not in the Hextrade docs.</p>
        <Link href="/" className="mt-6 inline-block text-sm text-accent hover:text-accent-hover">
          Back to Welcome
        </Link>
      </div>
    </div>
  );
}
