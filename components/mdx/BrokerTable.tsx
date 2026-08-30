import { platforms } from "@/lib/platforms";
import { PlatformIcon } from "./PlatformIcon";

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
          {platforms.map((broker) => (
            <tr key={broker.platformType} className="border-t border-border">
              <td className="px-3 py-2.5">
                <span className="flex items-center gap-2.5 font-medium text-text">
                  <PlatformIcon slug={broker.platformType} />
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
