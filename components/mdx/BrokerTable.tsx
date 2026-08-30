const brokers = [
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

export function BrokerTable() {
  return (
    <div className="my-5 overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-surface-2 text-text">
            <th className="px-3 py-2.5 font-semibold">Platform</th>
            <th className="px-3 py-2.5 font-semibold">Type</th>
            <th className="px-3 py-2.5 font-semibold">Algorithms</th>
            <th className="px-3 py-2.5 font-semibold">Webhooks</th>
            <th className="px-3 py-2.5 font-semibold">Copy trade</th>
            <th className="px-3 py-2.5 font-semibold">platformType</th>
          </tr>
        </thead>
        <tbody>
          {brokers.map((broker) => (
            <tr key={broker.platformType} className="border-t border-border">
              <td className="px-3 py-2.5">
                <span className="flex items-center gap-2.5 font-medium text-text">
                  <img
                    src={`/images/platforms/${broker.file}`}
                    alt=""
                    width={22}
                    height={22}
                    className="inline-icon h-[22px] w-[22px] rounded-[4px] object-contain"
                  />
                  {broker.name}
                </span>
              </td>
              <td className="px-3 py-2.5 text-muted">{broker.type}</td>
              <td className="px-3 py-2.5 text-muted">{broker.algorithms}</td>
              <td className="px-3 py-2.5 text-muted">{broker.webhooks}</td>
              <td className="px-3 py-2.5 text-muted">{broker.copy}</td>
              <td className="px-3 py-2.5">
                <code>{broker.platformType}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
