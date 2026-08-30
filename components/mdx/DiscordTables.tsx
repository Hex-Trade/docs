import type { ReactNode } from "react";
import { PlatformIcon } from "./PlatformIcon";

function FirmIcon({ src, name }: { src: string; name: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 font-medium text-text">
      <img src={src} alt="" width={22} height={22} className="inline-icon rounded-[4px] object-contain bg-surface-2" />
      {name}
    </span>
  );
}

function Platforms({ slugs }: { slugs: string[] }) {
  return (
    <span className="inline-flex flex-wrap items-center gap-1.5">
      {slugs.map((slug) => (
        <PlatformIcon key={slug} slug={slug} size={18} />
      ))}
    </span>
  );
}

const brokers = [
  { name: "Tradovate", slug: "tradovate", href: "https://www.tradovate.com/", label: "tradovate.com — support and terms" },
  { name: "NinjaTrader", slug: "ninjatrader", href: "https://discord.com/invite/ninjatrader", label: "NinjaTrader Discord" },
  { name: "Rithmic", slug: "rithmic", href: "https://www.rithmic.com/", label: "rithmic.com — use your FCM/prop Discord" },
  { name: "ProjectX", slug: "projectx", href: "https://www.projectx.com/", label: "projectx.com" },
  { name: "CQG", slug: "cqg", href: "https://www.cqg.com/", label: "cqg.com" },
  { name: "Volumetrica", slug: "volumetrica", href: "https://www.volumetricatrading.com/", label: "volumetricatrading.com" },
  { name: "Hyperliquid", slug: "hyperliquid", href: "https://app.hyperliquid.xyz", label: "app.hyperliquid.xyz" },
  { name: "OANDA", slug: "oanda", href: "https://www.oanda.com/", label: "oanda.com" },
  { name: "Plus500", slug: "plus500", href: "https://www.plus500.com/", label: "plus500.com" },
  { name: "TradeLocker", slug: "tradelocker", href: "https://www.tradelocker.com/", label: "tradelocker.com" },
  { name: "MatchTrader", slug: "matchtrader", href: "https://www.match-trader.com/", label: "match-trader.com" },
  { name: "cTrader", slug: "ctrader", href: "https://ctrader.com/", label: "ctrader.com" },
  { name: "MetaTrader 5", slug: "mt5", href: "https://www.metatrader5.com/", label: "metatrader5.com" },
];

// Platforms Hextrade can connect, listed on Prop Firm Match (Aug 2026).
const futuresProps = [
  { name: "Lucid Trading", file: "lucidtrading.jpg", href: "https://lucidtrading.com/", platforms: ["tradovate", "rithmic", "ninjatrader", "cqg"] },
  { name: "Tradeify", file: "tradeify.svg", href: "https://www.tradeify.co/", platforms: ["tradovate", "rithmic", "ninjatrader"] },
  { name: "MyFundedFutures", file: "myfundedfutures.svg", href: "https://myfundedfutures.com", platforms: ["tradovate", "ninjatrader", "volumetrica"] },
  { name: "FundedNext Futures", file: "fundednext-futures.svg", href: "https://fundednext.com", platforms: ["tradovate", "ninjatrader"] },
  { name: "Top One Futures", file: "toponefutures.png", href: "https://toponefutures.com", platforms: ["tradovate", "ninjatrader"] },
  { name: "Topstep", file: "topstep.png", href: "https://www.topstep.com", platforms: ["projectx", "plus500"] },
  { name: "Apex Trader Funding", file: "apex.svg", href: "https://apextraderfunding.com", platforms: ["tradovate", "rithmic", "ninjatrader"] },
  { name: "Goat Funded Futures", file: "goatfundedfutures.svg", href: "https://goatfundedfutures.com", platforms: ["tradovate", "ninjatrader", "volumetrica", "cqg"] },
  { name: "FuturesElite", file: "futureselite.svg", href: "https://futureselite.com", platforms: ["tradovate", "ninjatrader", "volumetrica"] },
  { name: "Trade Day", file: "tradeday.svg", href: "https://tradeday.com", platforms: ["tradovate", "rithmic", "ninjatrader", "cqg"] },
  { name: "E8 Futures", file: "e8futures.svg", href: "https://e8futures.com", platforms: ["tradovate", "ninjatrader"] },
  { name: "Take Profit Trader", file: "takeprofittrader.svg", href: "https://takeprofittrader.com", platforms: ["tradovate", "rithmic", "ninjatrader", "cqg"] },
  { name: "DayTraders", file: "daytraders.svg", href: "https://daytraders.com", platforms: ["rithmic"] },
  { name: "Alpha Futures", file: "alphafutures.png", href: "https://alpha-futures.com", platforms: ["tradovate", "rithmic", "ninjatrader"] },
  { name: "TickTickTrader", file: "tickticktrader.png", href: "https://tickticktrader.com", platforms: ["tradovate", "rithmic"] },
  { name: "Bulenox", file: "bulenox.png", href: "https://bulenox.com", platforms: ["tradovate", "rithmic"] },
  { name: "Earn2Trade", file: "earn2trade.jpg", href: "https://www.earn2trade.com/", platforms: ["tradovate", "rithmic", "ninjatrader"] },
  { name: "Funded Futures Family", file: "fundedfuturesfamily.png", href: "https://www.fundedfuturesfamily.com/", platforms: ["tradovate", "ninjatrader"] },
  { name: "Traders Launch", file: "traderslaunch.png", href: "https://traderslaunch.com/", platforms: ["tradovate", "ninjatrader"] },
  { name: "AquaFutures", file: "aquafutures.png", href: "https://www.aquafutures.io/", platforms: ["volumetrica"] },
  { name: "Blue Guardian Futures", file: "blueguardian.png", href: "https://blueguardian.com/", platforms: ["tradovate", "ninjatrader"] },
  { name: "The Trading Pit Futures", file: "thetradingpit.png", href: "https://www.thetradingpit.com/", platforms: ["tradovate", "ninjatrader", "rithmic"] },
  { name: "BluSky", file: "blusky.png", href: "https://blusky.pro/", platforms: ["tradovate", "ninjatrader", "rithmic", "volumetrica"] },
  { name: "TX3 Funding", file: "tx3funding.png", href: "https://tx3funding.com/", platforms: ["tradovate", "ninjatrader"] },
  { name: "FXIFY Futures", file: "fxifyfutures.png", href: "https://fxify.com/", platforms: ["tradovate", "ninjatrader"] },
  { name: "The Futures Desk", file: "thefuturesdesk.png", href: "https://thefuturesdesk.com/", platforms: ["tradovate", "ninjatrader"] },
  { name: "Hola Prime Futures", file: "holaprime.png", href: "https://holaprime.com/", platforms: ["tradovate", "ninjatrader"] },
  { name: "Funding Futures", file: "fundingfutures.png", href: "https://fundingfutures.com/", platforms: ["tradovate", "ninjatrader"] },
];

const cfdProps = [
  { name: "FundedNext", file: "fundednext.svg", href: "https://fundednext.com", platforms: ["matchtrader", "mt5", "ctrader"] },
  { name: "FundingPips", file: "fundingpips.svg", href: "https://fundingpips.com", platforms: ["matchtrader", "mt5", "ctrader"] },
  { name: "E8 Markets", file: "e8markets.svg", href: "https://e8markets.com", platforms: ["matchtrader", "mt5", "tradelocker", "ctrader"] },
  { name: "The5ers", file: "the5ers.svg", href: "https://the5ers.com", platforms: ["mt5", "ctrader"] },
  { name: "Goat Funded Trader", file: "goatfundedtrader.svg", href: "https://goatfundedtrader.com", platforms: ["matchtrader", "mt5", "tradelocker", "ctrader"] },
  { name: "Hola Prime", file: "holaprime.png", href: "https://holaprime.com", platforms: ["matchtrader", "mt5", "tradelocker", "ctrader"] },
  { name: "Blue Guardian", file: "blueguardian.png", href: "https://blueguardian.com", platforms: ["matchtrader", "mt5", "tradelocker"] },
  { name: "FTMO", file: "ftmo.svg", href: "https://ftmo.com", platforms: ["mt5", "ctrader"] },
  { name: "Alpha Capital", file: "alphacapital.svg", href: "https://alphacapitalgroup.com/", platforms: ["mt5", "tradelocker", "ctrader"] },
  { name: "BrightFunded", file: "brightfunded.png", href: "https://brightfunded.com/", platforms: ["mt5", "ctrader"] },
  { name: "AquaFunded", file: "aquafunded.png", href: "https://aquafunded.com/", platforms: ["matchtrader", "mt5", "tradelocker", "ctrader"] },
  { name: "Maven", file: "maven.png", href: "https://maventrading.com/", platforms: ["matchtrader", "mt5", "ctrader"] },
  { name: "Instant Funding", file: "instantfunding.png", href: "https://instantfunding.com/", platforms: ["matchtrader", "mt5", "ctrader"] },
  { name: "Top One Trader", file: "toponetrader.png", href: "https://toponetrader.com/", platforms: ["matchtrader", "mt5", "tradelocker", "ctrader"] },
  { name: "For Traders", file: "fortraders.png", href: "https://fortraders.com/", platforms: ["mt5", "tradelocker", "ctrader"] },
  { name: "Funded Trading Plus", file: "fundedtradingplus.png", href: "https://www.fundedtradingplus.com/", platforms: ["matchtrader", "mt5", "ctrader"] },
  { name: "City Traders Imperium", file: "cti.png", href: "https://citytradersimperium.com/", platforms: ["matchtrader", "mt5"] },
  { name: "FundedElite", file: "fundedelite.png", href: "https://fundedelite.com/", platforms: ["matchtrader", "mt5", "tradelocker"] },
  { name: "Crypto Fund Trader", file: "cryptofundtrader.png", href: "https://cryptofundtrader.com/", platforms: ["matchtrader", "mt5"] },
  { name: "The Trading Pit", file: "thetradingpit.png", href: "https://www.thetradingpit.com/", platforms: ["mt5", "ctrader"] },
];

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="my-5 overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-surface-2 text-text">
            {headers.map((header) => (
              <th key={header} className="px-3 py-2.5 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, index) => (
            <tr key={index} className="border-t border-border">
              {cells.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-3 py-2.5 align-middle">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function BrokerDiscordTable() {
  return (
    <Table
      headers={["Platform", "Community"]}
      rows={brokers.map((broker) => [
        <span key={broker.slug} className="inline-flex items-center gap-2.5 font-medium text-text">
          <PlatformIcon slug={broker.slug} />
          {broker.name}
        </span>,
        <a key={`${broker.slug}-link`} href={broker.href} target="_blank" rel="noreferrer">
          {broker.label}
        </a>,
      ])}
    />
  );
}

export function FuturesPropDiscordTable() {
  return (
    <Table
      headers={["Firm", "Site", "Platforms"]}
      rows={futuresProps.map((firm) => [
        <FirmIcon key={firm.name} src={`/images/firms/${firm.file}`} name={firm.name} />,
        <a key={`${firm.name}-site`} href={firm.href} target="_blank" rel="noreferrer">
          {new URL(firm.href).hostname.replace(/^www\./, "")}
        </a>,
        <Platforms key={`${firm.name}-platforms`} slugs={firm.platforms} />,
      ])}
    />
  );
}

export function CfdPropDiscordTable() {
  return (
    <Table
      headers={["Firm", "Site", "Platforms"]}
      rows={cfdProps.map((firm) => [
        <FirmIcon key={firm.name} src={`/images/firms/${firm.file}`} name={firm.name} />,
        <a key={`${firm.name}-site`} href={firm.href} target="_blank" rel="noreferrer">
          {new URL(firm.href).hostname.replace(/^www\./, "")}
        </a>,
        <Platforms key={`${firm.name}-platforms`} slugs={firm.platforms} />,
      ])}
    />
  );
}
