import Link from "next/link";
import {
  BarChart3,
  CalendarDays,
  CandlestickChart,
  Crown,
  Cpu,
  List,
  PieChart,
  Settings,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const pages: { href: string; title: string; use: string; icon: LucideIcon }[] = [
  { href: "/accounts", title: "Accounts", use: "Connected brokers, balances, add account", icon: List },
  { href: "/algorithms", title: "Algos", use: "Catalog, metrics, attach an account", icon: Cpu },
  { href: "/copy-trading", title: "Copy Trade", use: "Master / follower groups", icon: Users },
  { href: "/portfolio", title: "Portfolio", use: "Mix, optimize, and deploy strategies", icon: BarChart3 },
  { href: "/trading", title: "Trade", use: "Manual orders and charts", icon: CandlestickChart },
  { href: "/analytics", title: "Analytics", use: "Live P&L and account performance", icon: PieChart },
  { href: "/calendar", title: "Calendar", use: "Macro events that can move markets", icon: CalendarDays },
  { href: "/subscriptions", title: "Subscriptions", use: "Plan, limits, algorithm access", icon: Crown },
  { href: "/settings", title: "Settings", use: "Profile, 2FA, notifications, Aqua theme, API token", icon: Settings },
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
          {pages.map((page) => {
            const Icon = page.icon;
            return (
              <tr key={page.href} className="border-t border-border">
                <td className="px-3 py-2.5">
                  <Link href={page.href} className="group flex items-center gap-2.5 font-medium text-text no-underline hover:text-accent">
                    <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center text-text group-hover:text-accent">
                      <Icon size={18} strokeWidth={2.25} />
                    </span>
                    {page.title}
                  </Link>
                </td>
                <td className="px-3 py-2.5 text-muted">{page.use}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
