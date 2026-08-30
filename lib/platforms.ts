export type Platform = {
  name: string;
  file: string;
  type: string;
  algorithms: string;
  webhooks: string;
  copy: string;
  platformType: string;
};

export const platforms: Platform[] = [
  { name: "ProjectX", file: "projectx.png", type: "Prop firm / Futures", algorithms: "Yes", webhooks: "Yes", copy: "Yes", platformType: "projectx" },
  { name: "Tradovate", file: "tradovate.png", type: "Futures", algorithms: "Yes", webhooks: "Yes", copy: "Yes", platformType: "tradovate" },
  { name: "NinjaTrader", file: "ninjatrader.png", type: "Futures", algorithms: "Yes", webhooks: "Yes", copy: "Yes", platformType: "ninjatrader" },
  { name: "Rithmic", file: "rithmic.png", type: "Futures", algorithms: "Yes", webhooks: "Yes", copy: "Yes", platformType: "rithmic" },
  { name: "TradeLocker", file: "tradelocker.png", type: "Multi-asset / Prop", algorithms: "Yes", webhooks: "Yes", copy: "—", platformType: "tradelocker" },
  { name: "Plus500", file: "plus500.png", type: "CFDs / Multi-asset", algorithms: "Yes", webhooks: "Yes", copy: "—", platformType: "plus500" },
  { name: "Oanda", file: "oanda.png", type: "Forex & CFDs", algorithms: "Forex only", webhooks: "Yes", copy: "—", platformType: "oanda" },
  { name: "Hyperliquid", file: "hyperliquid.png", type: "Crypto perps", algorithms: "Yes", webhooks: "Yes", copy: "—", platformType: "hyperliquid" },
  { name: "CQG", file: "cqg.png", type: "Futures & Derivatives", algorithms: "Yes", webhooks: "—", copy: "—", platformType: "cqg" },
  { name: "MatchTrader", file: "matchtrader.png", type: "Prop / Forex & CFDs", algorithms: "Yes", webhooks: "Yes", copy: "—", platformType: "matchtrader" },
  { name: "Volumetrica", file: "volumetrica.png", type: "Futures / Order-flow", algorithms: "Yes", webhooks: "Yes", copy: "Yes", platformType: "volumetrica" },
  { name: "cTrader", file: "ctrader.png", type: "Forex & CFDs", algorithms: "Yes", webhooks: "—", copy: "—", platformType: "ctrader" },
  { name: "MetaTrader 5", file: "metatrader5.png", type: "Multi-asset", algorithms: "Yes", webhooks: "Yes", copy: "—", platformType: "mt5" },
];

export const webhookPlatformOrder = [
  "projectx",
  "tradovate",
  "ninjatrader",
  "rithmic",
  "tradelocker",
  "matchtrader",
  "volumetrica",
  "mt5",
  "oanda",
  "hyperliquid",
  "plus500",
] as const;

export const copyTradeSlugs = ["projectx", "tradovate", "ninjatrader", "rithmic", "volumetrica"] as const;

export const algorithmSlugs = platforms
  .filter((platform) => platform.algorithms === "Yes")
  .map((platform) => platform.platformType);

export function getPlatform(slug: string) {
  return platforms.find((platform) => platform.platformType === slug);
}

export function getPlatforms(slugs: readonly string[] | undefined) {
  return (slugs ?? [])
    .map((slug) => getPlatform(slug))
    .filter((platform): platform is Platform => Boolean(platform));
}
