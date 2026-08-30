import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CalendarDays,
  CandlestickChart,
  BookOpen,
  CircleDollarSign,
  Coins,
  Crown,
  Cpu,
  Home,
  Landmark,
  Layers,
  Link2,
  List,
  MessagesSquare,
  PieChart,
  Rocket,
  TrendingUp,
  Settings,
  User,
  Users,
  Webhook,
  Zap,
  Scale,
  Shield,
  TrendingDown,
  CircleHelp,
} from "lucide-react";

export type NavIcon = LucideIcon;

export type NavPage = {
  title: string;
  href: string;
  slug: string;
  icon: NavIcon;
  image?: string;
};

export type NavGroup = {
  title: string;
  icon: NavIcon;
  image?: string;
  pages?: NavPage[];
  groups?: NavGroup[];
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
      { title: "Accounts", href: "/accounts", slug: "accounts", icon: List },
      { title: "Algorithms", href: "/algorithms", slug: "algorithms", icon: Cpu },
      { title: "Copy trading", href: "/copy-trading", slug: "copy-trading", icon: Users },
      { title: "Portfolio", href: "/portfolio", slug: "portfolio", icon: BarChart3 },
      { title: "TradingView webhooks", href: "/webhooks", slug: "webhooks", icon: Webhook, image: "/images/nav/tradingview.svg" },
      { title: "Trading", href: "/trading", slug: "trading", icon: CandlestickChart },
      { title: "Analytics", href: "/analytics", slug: "analytics", icon: PieChart },
      { title: "Calendar", href: "/calendar", slug: "calendar", icon: CalendarDays },
    ],
  },
  {
    title: "Brokers",
    icon: Landmark,
    pages: [
      { title: "Overview", href: "/brokers", slug: "brokers", icon: Landmark },
      { title: "Links", href: "/broker-discords", slug: "broker-discords", icon: Link2 },
    ],
    groups: [
      {
        title: "Futures",
        icon: TrendingUp,
        pages: [
          { title: "Tradovate", href: "/tradovate", slug: "tradovate", icon: TrendingUp, image: "/images/platforms/tradovate.png" },
          { title: "NinjaTrader", href: "/ninjatrader", slug: "ninjatrader", icon: TrendingUp, image: "/images/platforms/ninjatrader.png" },
          { title: "ProjectX", href: "/projectx", slug: "projectx", icon: Shield, image: "/images/platforms/projectx.png" },
          { title: "Rithmic", href: "/rithmic", slug: "rithmic", icon: Zap, image: "/images/platforms/rithmic.png" },
          { title: "Volumetrica", href: "/volumetrica", slug: "volumetrica", icon: BarChart3, image: "/images/platforms/volumetrica.png" },
          { title: "CQG", href: "/cqg", slug: "cqg", icon: Landmark, image: "/images/platforms/cqg.png" },
        ],
      },
      {
        title: "CFDs",
        icon: CircleDollarSign,
        pages: [
          { title: "TradeLocker", href: "/tradelocker", slug: "tradelocker", icon: CircleDollarSign, image: "/images/platforms/tradelocker.png" },
          { title: "Plus500", href: "/plus500", slug: "plus500", icon: CircleDollarSign, image: "/images/platforms/plus500.png" },
          { title: "MatchTrader", href: "/matchtrader", slug: "matchtrader", icon: CircleDollarSign, image: "/images/platforms/matchtrader.png" },
          { title: "MetaTrader 5", href: "/mt5", slug: "mt5", icon: CircleDollarSign, image: "/images/platforms/metatrader5.png" },
          { title: "Oanda", href: "/oanda", slug: "oanda", icon: CircleDollarSign, image: "/images/platforms/oanda.png" },
          { title: "cTrader", href: "/ctrader", slug: "ctrader", icon: CircleDollarSign, image: "/images/platforms/ctrader.png" },
        ],
      },
      {
        title: "Crypto",
        icon: Coins,
        pages: [
          { title: "Hyperliquid", href: "/hyperliquid", slug: "hyperliquid", icon: Coins, image: "/images/platforms/hyperliquid.png" },
        ],
      },
    ],
  },
  {
    title: "Account",
    icon: User,
    pages: [
      { title: "Subscriptions", href: "/subscriptions", slug: "subscriptions", icon: Crown },
      { title: "Settings", href: "/settings", slug: "settings", icon: Settings },
      { title: "Discord", href: "/discord", slug: "discord", icon: MessagesSquare, image: "/images/nav/discord.png" },
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
      { title: "Copy trading", href: "/faq-copy-trading", slug: "faq-copy-trading", icon: Users },
      { title: "TradingView", href: "/faq-tradingview", slug: "faq-tradingview", icon: Webhook, image: "/images/nav/tradingview.svg" },
    ],
  },
];

function pagesInGroup(group: NavGroup): NavPage[] {
  return [...(group.pages ?? []), ...(group.groups ?? []).flatMap(pagesInGroup)];
}

export const flatPages = nav.flatMap(pagesInGroup);

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

export function findGroupForHref(href: string): { group: NavGroup; subgroup?: NavGroup } | null {
  for (const group of nav) {
    if (group.pages?.some((page) => page.href === href)) return { group };
    for (const subgroup of group.groups ?? []) {
      if (subgroup.pages?.some((page) => page.href === href)) return { group, subgroup };
    }
  }
  return null;
}

export function findGroupTitleForSlug(slug: string) {
  const page = getPageBySlug(slug);
  if (!page) return undefined;
  const match = findGroupForHref(page.href);
  return match?.subgroup?.title ?? match?.group.title;
}
