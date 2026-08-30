import Link from "next/link";
import { CandlestickChart, List, Settings, Users } from "lucide-react";
import type { ReactNode } from "react";

function AlgosIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="18" height="18" aria-hidden>
      <path
        fill="currentColor"
        d="M28.241 22.627c-.378.874-1.278 1.373-2.23 1.373h-6.257q.061-.17.109-.35a4.12 4.12 0 0 0-.901-3.788c.325-2.65.528-5.364.652-7.508.062-1.064-1.241-1.42-1.71-.467-.947 1.92-2.105 4.374-3.125 6.834a4.04 4.04 0 0 0-2.642 2.823 4.1 4.1 0 0 0 .11 2.456H5.988c-.952 0-1.852-.5-2.23-1.373a13.3 13.3 0 0 1-1.092-5.294C2.667 9.97 8.637 4 16 4s13.333 5.97 13.333 13.333c0 1.881-.39 3.671-1.092 5.294"
        opacity="0.35"
      />
      <path
        fill="currentColor"
        d="M19.614 12.353c.062-1.064-1.241-1.419-1.71-.466-.947 1.92-2.105 4.374-3.125 6.834a4.04 4.04 0 0 0-2.642 2.822c-.571 2.17.695 4.402 2.828 4.984s4.326-.707 4.898-2.878a4.12 4.12 0 0 0-.901-3.788c.325-2.65.528-5.364.652-7.508"
      />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="18" height="18" aria-hidden>
      <path
        fill="currentColor"
        d="M28.893 9.266c-.853-2.893-3.266-5.306-6.16-6.16-2.2-.64-3.72-.586-4.773.2-1.267.947-1.413 2.654-1.413 3.867v3.32c0 3.28 1.493 4.947 4.426 4.947H24.8c1.2 0 2.92-.147 3.867-1.414.813-1.04.88-2.56.226-4.76"
      />
      <path
        fill="currentColor"
        d="M25.213 17.813a1.82 1.82 0 0 0-1.373-.627h-4.773a4.256 4.256 0 0 1-4.254-4.253V8.159c0-.52-.226-1.026-.626-1.373a1.8 1.8 0 0 0-1.427-.44c-3.133.4-6.013 2.12-7.893 4.707-1.894 2.6-2.587 5.773-1.987 8.946.867 4.587 4.533 8.254 9.133 9.12a11 11 0 0 0 2.2.214c2.414 0 4.747-.747 6.734-2.2 2.586-1.88 4.306-4.76 4.706-7.894a1.8 1.8 0 0 0-.44-1.426"
        opacity="0.35"
      />
    </svg>
  );
}

function PortfolioIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="18" height="18" aria-hidden>
      <path fill="currentColor" d="M18.333 18.333H1.667a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h16.666a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625" />
      <path fill="currentColor" d="M8.125 3.334v15h3.75v-15c0-.917-.375-1.667-1.5-1.667h-.75c-1.125 0-1.5.75-1.5 1.667" />
      <path
        fill="currentColor"
        d="M2.5 8.334v10h3.333v-10c0-.917-.333-1.667-1.333-1.667h-.667c-1 0-1.333.75-1.333 1.667M14.167 12.5v5.833H17.5V12.5c0-.917-.333-1.667-1.333-1.667H15.5c-1 0-1.333.75-1.333 1.667"
        opacity="0.35"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="18" height="18" aria-hidden>
      <path
        fill="currentColor"
        d="M5.8 1.667c.348 0 .63.258.63.577v1.165c.558-.01 1.185-.01 1.89-.01h3.36c.705 0 1.33 0 1.89.01V2.244c0-.319.282-.577.63-.577s.63.258.63.577v1.215c1.208.088 2.003.306 2.586.84s.82 1.26.917 2.368V7.5H1.667v-.833c.096-1.108.334-1.833.917-2.368.584-.534 1.377-.752 2.586-.84V2.244c0-.319.283-.577.63-.577"
      />
      <path
        fill="currentColor"
        d="M18.333 11.667V10c0-.7-.01-1.946-.021-2.5H1.672c-.011.554 0 1.8 0 2.5v1.667c0 3.142 0 4.714.975 5.69.977.976 2.548.976 5.69.976h3.333c3.142 0 4.712 0 5.688-.976.975-.976.975-2.548.975-5.69"
        opacity="0.35"
      />
      <path fill="currentColor" d="M15 13.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 38 26" width="18" height="18" aria-hidden>
      <path
        fill="#FACC15"
        stroke="#FACC15"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.333"
        d="m19 1 8 12 10-8-4 20H5L1 5l10 8z"
      />
    </svg>
  );
}

const pages: { href: string; title: string; use: string; icon: ReactNode }[] = [
  { href: "/accounts", title: "Accounts", use: "Connected brokers, balances, add account", icon: <List size={18} strokeWidth={2} /> },
  { href: "/algorithms", title: "Algos", use: "Catalog, metrics, attach an account", icon: <AlgosIcon /> },
  { href: "/copy-trading", title: "Copy Trade", use: "Master / follower groups", icon: <Users size={18} strokeWidth={2} /> },
  { href: "/portfolio", title: "Portfolio", use: "Mix, optimize, and deploy strategies", icon: <PortfolioIcon /> },
  { href: "/trading", title: "Trade", use: "Manual orders and charts", icon: <CandlestickChart size={18} strokeWidth={2} /> },
  { href: "/analytics", title: "Analytics", use: "Live P&L and account performance", icon: <AnalyticsIcon /> },
  { href: "/calendar", title: "Calendar", use: "Macro events that can move markets", icon: <CalendarIcon /> },
  { href: "/subscriptions", title: "Subscriptions", use: "Plan, limits, algorithm access", icon: <CrownIcon /> },
  { href: "/settings", title: "Settings", use: "Profile, 2FA, notifications, Aqua theme, API token", icon: <Settings size={18} strokeWidth={2} /> },
];

export function DashboardPagesTable() {
  return (
    <div className="my-5 overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[480px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-surface-2 text-text">
            <th className="px-3 py-2.5 font-semibold">Dashboard page</th>
            <th className="px-3 py-2.5 font-semibold">Use it for</th>
          </tr>
        </thead>
        <tbody>
          {pages.map((page) => (
            <tr key={page.href} className="border-t border-border">
              <td className="px-3 py-2.5">
                <Link href={page.href} className="flex items-center gap-2.5 font-medium text-text no-underline hover:text-accent">
                  <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center text-text [&>svg]:h-[18px] [&>svg]:w-[18px]">
                    {page.icon}
                  </span>
                  {page.title}
                </Link>
              </td>
              <td className="px-3 py-2.5 text-muted">{page.use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
