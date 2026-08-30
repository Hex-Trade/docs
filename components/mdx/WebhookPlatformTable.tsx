import { getPlatforms, webhookPlatformOrder } from "@/lib/platforms";
import { PlatformIcon } from "./PlatformIcon";

export function WebhookPlatformTable() {
  const items = getPlatforms(webhookPlatformOrder);

  return (
    <div className="my-5 overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[360px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-surface-2 text-text">
            <th className="px-3 py-2.5 font-semibold">Platform</th>
            <th className="px-3 py-2.5 font-semibold">platformType</th>
          </tr>
        </thead>
        <tbody>
          {items.map((platform) => (
            <tr key={platform.platformType} className="border-t border-border">
              <td className="px-3 py-2.5">
                <span className="flex items-center gap-2.5 font-medium text-text">
                  <PlatformIcon slug={platform.platformType} />
                  {platform.name}
                </span>
              </td>
              <td className="px-3 py-2.5">
                <code>{platform.platformType}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
