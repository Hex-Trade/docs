const futures = [
  { code: "NQ", name: "Nasdaq 100", file: "nq.svg", mini: "NQ · $20", micro: "MNQ · $2", note: "1/10" },
  { code: "ES", name: "S&P 500", file: "es.svg", mini: "ES · $50", micro: "MES · $5", note: "1/10" },
  { code: "YM", name: "Dow Jones", file: "ym.svg", mini: "YM · $5", micro: "MYM · $0.50", note: "1/10" },
  { code: "NKD", name: "Nikkei 225", file: "nkd.svg", mini: "NKD · $5", micro: "MKD · $1", note: "1/5" },
  { code: "GC", name: "Gold", file: "gc.svg", mini: "GC · $100", micro: "MGC · $10", note: "1/10" },
  { code: "CL", name: "Crude Oil", file: "cl.svg", mini: "CL · $1,000", micro: "MCL · $100", note: "1/10" },
  { code: "BTC", name: "Bitcoin", file: "btc.svg", mini: "BTC · $5", micro: "MBT · $0.50", note: "1/10" },
  { code: "ETH", name: "Ethereum", file: "eth.svg", mini: "ETH · $50", micro: "MET · $5", note: "1/10" },
];

const crypto = [
  { code: "XYZ100", name: "Nasdaq 100", file: "nq.svg", coin: "xyz:XYZ100", aliases: "NAS100, USTEC, US100, NDX", type: "Tokenized" },
  { code: "SP500", name: "S&P 500", file: "es.svg", coin: "xyz:SP500", aliases: "US500, SPX, SPX500", type: "Tokenized" },
  { code: "BTC", name: "Bitcoin", file: "btc.svg", coin: "BTC", aliases: "BTCUSD, BTCUSDT", type: "Crypto perp" },
  { code: "ETH", name: "Ethereum", file: "eth.svg", coin: "ETH", aliases: "ETHUSD, ETHUSDT", type: "Crypto perp" },
  { code: "SOL", name: "Solana", file: "sol.svg", coin: "SOL", aliases: "SOLUSD, SOLUSDT", type: "Crypto perp" },
];

const cfds = [
  { code: "NAS100", name: "Nasdaq 100", file: "nq.svg", maps: "NQ / MNQ", pt: "$1" },
  { code: "US500", name: "S&P 500", file: "es.svg", maps: "ES / MES", pt: "$1" },
  { code: "US30", name: "Dow Jones", file: "ym.svg", maps: "YM / MYM", pt: "$1" },
  { code: "JPN225", name: "Nikkei 225", file: "nkd.svg", maps: "NKD / MKD", pt: "$1" },
  { code: "XAUUSD", name: "Gold", file: "gc.svg", maps: "GC / MGC", pt: "$100" },
  { code: "USOIL", name: "Crude Oil", file: "cl.svg", maps: "CL / MCL", pt: "$100" },
  { code: "BTCUSD", name: "Bitcoin", file: "btc.svg", maps: "BTC / MBT", pt: "$1" },
  { code: "ETHUSD", name: "Ethereum", file: "eth.svg", maps: "ETH / MET", pt: "$1" },
];

function IconCell({ file, code, name }: { file: string; code: string; name: string }) {
  return (
    <span className="flex items-center gap-2.5 font-medium text-text">
      <img
        src={`/images/instruments/${file}`}
        alt=""
        width={22}
        height={22}
        className="inline-icon h-[22px] w-[22px] rounded-[4px] object-contain"
      />
      {code}
      <span className="font-normal text-muted">{name}</span>
    </span>
  );
}

export function ContractSpecsTable({ group = "futures" }: { group?: string }) {
  if (group === "crypto") {
    return (
      <div className="my-5 overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-surface-2 text-text">
              <th className="px-3 py-2.5 font-semibold">Ticker</th>
              <th className="px-3 py-2.5 font-semibold">Hyperliquid coin</th>
              <th className="px-3 py-2.5 font-semibold">Also accepts</th>
              <th className="px-3 py-2.5 font-semibold">Type</th>
            </tr>
          </thead>
          <tbody>
            {crypto.map((row) => (
              <tr key={row.code} className="border-t border-border">
                <td className="px-3 py-2.5">
                  <IconCell file={row.file} code={row.code} name={row.name} />
                </td>
                <td className="px-3 py-2.5 text-muted">{row.coin}</td>
                <td className="px-3 py-2.5 text-muted">{row.aliases}</td>
                <td className="px-3 py-2.5 text-muted">{row.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (group === "cfd") {
    return (
      <div className="my-5 overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-surface-2 text-text">
              <th className="px-3 py-2.5 font-semibold">Ticker</th>
              <th className="px-3 py-2.5 font-semibold">Maps to futures</th>
              <th className="px-3 py-2.5 font-semibold">Default pt/lot</th>
            </tr>
          </thead>
          <tbody>
            {cfds.map((row) => (
              <tr key={row.code} className="border-t border-border">
                <td className="px-3 py-2.5">
                  <IconCell file={row.file} code={row.code} name={row.name} />
                </td>
                <td className="px-3 py-2.5 text-muted">{row.maps}</td>
                <td className="px-3 py-2.5 text-muted">{row.pt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="my-5 overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-surface-2 text-text">
            <th className="px-3 py-2.5 font-semibold">Ticker</th>
            <th className="px-3 py-2.5 font-semibold">Mini ($/pt)</th>
            <th className="px-3 py-2.5 font-semibold">Micro ($/pt)</th>
            <th className="px-3 py-2.5 font-semibold">Micro vs mini</th>
          </tr>
        </thead>
        <tbody>
          {futures.map((row) => (
            <tr key={row.code} className="border-t border-border">
              <td className="px-3 py-2.5">
                <IconCell file={row.file} code={row.code} name={row.name} />
              </td>
              <td className="px-3 py-2.5 text-muted">{row.mini}</td>
              <td className="px-3 py-2.5 text-muted">{row.micro}</td>
              <td className="px-3 py-2.5 text-muted">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
