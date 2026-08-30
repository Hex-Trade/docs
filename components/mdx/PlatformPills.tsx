import { algorithmSlugs, copyTradeSlugs, getPlatforms, platforms, webhookPlatformOrder } from "@/lib/platforms";
import { PlatformIcon } from "./PlatformIcon";

function parseSlugs(slugs: string | readonly string[] | undefined) {
  if (!slugs) return [];
  if (typeof slugs === "string") {
    return slugs.split(",").map((slug) => slug.trim()).filter(Boolean);
  }
  return [...slugs];
}

export function PlatformPills({ slugs }: { slugs: string | readonly string[] }) {
  const items = getPlatforms(parseSlugs(slugs));
  if (!items.length) return null;

  return (
    <div className="my-4 flex flex-wrap gap-2">
      {items.map((platform) => (
        <span
          key={platform.platformType}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-2.5 py-1.5 text-sm font-medium text-text"
        >
          <PlatformIcon slug={platform.platformType} />
          {platform.name}
        </span>
      ))}
    </div>
  );
}

export function CopyTradePills() {
  return <PlatformPills slugs={[...copyTradeSlugs]} />;
}

export function WebhookPills() {
  return <PlatformPills slugs={[...webhookPlatformOrder]} />;
}

export function AlgorithmPills() {
  return <PlatformPills slugs={algorithmSlugs} />;
}

export function AllPlatformPills() {
  return <PlatformPills slugs={platforms.map((platform) => platform.platformType)} />;
}

export function FuturesPills() {
  return <PlatformPills slugs={["projectx", "tradovate", "ninjatrader", "rithmic", "volumetrica", "cqg"]} />;
}

export function CfdPills() {
  return <PlatformPills slugs={["tradelocker", "matchtrader", "plus500", "mt5", "ctrader"]} />;
}

export function HyperliquidPills() {
  return <PlatformPills slugs={["hyperliquid"]} />;
}

export function PlatformIcons({ slugs }: { slugs: string | readonly string[] }) {
  const items = getPlatforms(parseSlugs(slugs));
  if (!items.length) return null;

  return (
    <div className="mb-2 mt-1 flex flex-wrap items-center gap-1.5">
      {items.map((platform) => (
        <PlatformIcon key={platform.platformType} slug={platform.platformType} size={24} />
      ))}
    </div>
  );
}
