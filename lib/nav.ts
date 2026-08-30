import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CalendarDays,
  CandlestickChart,
  BookOpen,
  CircleDollarSign,
  Coins,
  Copy,
  CreditCard,
  Cpu,
  Home,
  Landmark,
  Layers,
  MessagesSquare,
  PieChart,
  Rocket,
  TrendingUp,
  Settings,
  User,
  Wallet,
  Webhook,
  Zap,
  Scale,
  Shield,
  TrendingDown,
  CircleHelp,
} from "lucide-react";

export type NavPage = {
  title: string;
  href: string;
  slug: string;
  icon: LucideIcon;
};

export type NavGroup = {
  title: string;
  icon: LucideIcon;
  pages: NavPage[];
};

export const nav: NavGroup[] = [
  {
    title: "Start",
    icon: Rocket,
    pages: [
      { title: "Welcome", href: "/", slug: "index", icon: Home },
      { title: "Quick start", href: "/quick-start", slug: "quick-start", icon: Zap },
    ],
  },
  {
    title: "Platform",
    icon: Layers,
    pages: [
      { title: "Accounts", href: "/accounts", slug: "accounts", icon: Wallet },
      { title: "Brokers", href: "/brokers", slug: "brokers", icon: Landmark },
      { title: "Algorithms", href: "/algorithms", slug: "algorithms", icon: Cpu },
      { title: "Copy trading", href: "/copy-trading", slug: "copy-trading", icon: Copy },
      { title: "Portfolio", href: "/portfolio", slug: "portfolio", icon: PieChart },
      { title: "TradingView webhooks", href: "/webhooks", slug: "webhooks", icon: Webhook },
      { title: "Trading", href: "/trading", slug: "trading", icon: CandlestickChart },
      { title: "Analytics", href: "/analytics", slug: "analytics", icon: BarChart3 },
      { title: "Calendar", href: "/calendar", slug: "calendar", icon: CalendarDays },
    ],
  },
  {
    title: "Account",
    icon: User,
    pages: [
      { title: "Subscriptions", href: "/subscriptions", slug: "subscriptions", icon: CreditCard },
      { title: "Settings", href: "/settings", slug: "settings", icon: Settings },
      { title: "Discord", href: "/discord", slug: "discord", icon: MessagesSquare },
    ],
  },
  {
    title: "Learn",
    icon: BookOpen,
    pages: [
      { title: "Futures", href: "/futures", slug: "futures", icon: TrendingUp },
      { title: "CFDs", href: "/cfds", slug: "cfds", icon: CircleDollarSign },
      { title: "Crypto", href: "/crypto", slug: "crypto", icon: Coins },
      { title: "Position sizing", href: "/position-sizing", slug: "position-sizing", icon: Scale },
      { title: "Prop firm rules", href: "/prop-firm-rules", slug: "prop-firm-rules", icon: Shield },
      { title: "Drawdown", href: "/drawdown", slug: "drawdown", icon: TrendingDown },
    ],
  },
  {
    title: "FAQ",
    icon: CircleHelp,
    pages: [
      { title: "Overview", href: "/faq", slug: "faq", icon: CircleHelp },
      { title: "Account", href: "/faq-account", slug: "faq-account", icon: User },
      { title: "Brokers", href: "/faq-brokers", slug: "faq-brokers", icon: Landmark },
      { title: "Algorithms", href: "/faq-algorithms", slug: "faq-algorithms", icon: Cpu },
      { title: "Copy trading", href: "/faq-copy-trading", slug: "faq-copy-trading", icon: Copy },
      { title: "TradingView", href: "/faq-tradingview", slug: "faq-tradingview", icon: Webhook },
      { title: "Sizing", href: "/faq-sizing", slug: "faq-sizing", icon: Scale },
    ],
  },
];

export const flatPages = nav.flatMap((group) => group.pages);

export function getPageBySlug(slug: string) {
  return flatPages.find((page) => page.slug === slug);
}

export function getAdjacentPages(slug: string) {
  const index = flatPages.findIndex((page) => page.slug === slug);
  return {
    prev: index > 0 ? flatPages[index - 1] : null,
    next: index >= 0 && index < flatPages.length - 1 ? flatPages[index + 1] : null,
  };
}
