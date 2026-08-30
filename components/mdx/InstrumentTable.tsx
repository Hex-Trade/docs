const futures = [
  { code: "NQ", name: "Nasdaq 100 Futures", exchange: "CME", file: "nq.svg" },
  { code: "ES", name: "S&P 500 Futures", exchange: "CME", file: "es.svg" },
  { code: "GC", name: "Gold Futures", exchange: "COMEX", file: "gc.svg" },
  { code: "CL", name: "Crude Oil Futures", exchange: "NYMEX", file: "cl.svg" },
  { code: "YM", name: "Dow Jones Futures", exchange: "CBOT", file: "ym.svg" },
  { code: "NKD", name: "Nikkei 225 Futures", exchange: "CME", file: "nkd.svg" },
  { code: "BTC", name: "Bitcoin Futures", exchange: "CME", file: "btc.svg" },
  { code: "ETH", name: "Ethereum Futures", exchange: "CME", file: "eth.svg" },
];

const crypto = [
  { code: "XYZ100", name: "Nasdaq 100 tokenized", exchange: "HIP-3", file: "nq.svg" },
  { code: "SP500", name: "S&P 500 tokenized", exchange: "HIP-3", file: "es.svg" },
  { code: "BTC", name: "Bitcoin perp", exchange: "Hyperliquid", file: "btc.svg" },
  { code: "ETH", name: "Ethereum perp", exchange: "Hyperliquid", file: "eth.svg" },
  { code: "SOL", name: "Solana perp", exchange: "Hyperliquid", file: "sol.svg" },
];

const cfds = [
  { code: "NAS100", name: "Nasdaq 100 CFD", exchange: "CFD", file: "nq.svg" },
  { code: "US500", name: "S&P 500 CFD", exchange: "CFD", file: "es.svg" },
  { code: "XAUUSD", name: "Gold CFD", exchange: "CFD", file: "gc.svg" },
  { code: "USOIL", name: "Crude Oil CFD", exchange: "CFD", file: "cl.svg" },
  { code: "US30", name: "Dow Jones CFD", exchange: "CFD", file: "ym.svg" },
  { code: "JPN225", name: "Nikkei 225 CFD", exchange: "CFD", file: "nkd.svg" },
  { code: "BTCUSD", name: "Bitcoin CFD", exchange: "CFD", file: "btc.svg" },
  { code: "ETHUSD", name: "Ethereum CFD", exchange: "CFD", file: "eth.svg" },
];

function Table({ rows }: { rows: typeof futures }) {
  return (
    <div className="my-5 overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[480px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-surface-2 text-text">
            <th className="px-3 py-2.5 font-semibold">Ticker</th>
            <th className="px-3 py-2.5 font-semibold">Instrument</th>
            <th className="px-3 py-2.5 font-semibold">Exchange</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((instrument) => (
            <tr key={instrument.code} className="border-t border-border">
              <td className="px-3 py-2.5">
                <span className="flex items-center gap-2.5 font-medium text-text">
                  <img
                    src={`/images/instruments/${instrument.file}`}
                    alt=""
                    width={22}
                    height={22}
                    className="inline-icon h-[22px] w-[22px] rounded-[4px] object-contain"
                  />
                  {instrument.code}
                </span>
              </td>
              <td className="px-3 py-2.5 text-muted">{instrument.name}</td>
              <td className="px-3 py-2.5 text-muted">{instrument.exchange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function InstrumentTable({ group = "all" }: { group?: string }) {
  if (group === "futures") return <Table rows={futures} />;
  if (group === "cfd") return <Table rows={cfds} />;
  if (group === "crypto") return <Table rows={crypto} />;

  return (
    <>
      <h3 className="mt-6 text-base font-semibold text-text">Futures</h3>
      <Table rows={futures} />
      <h3 className="mt-8 text-base font-semibold text-text">CFDs</h3>
      <Table rows={cfds} />
      <h3 className="mt-8 text-base font-semibold text-text">Crypto</h3>
      <Table rows={crypto} />
    </>
  );
}
