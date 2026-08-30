import { Fragment } from "react";
import { getPlatforms } from "@/lib/platforms";
import { PlatformIcon } from "./PlatformIcon";

export function BrokerHeading({ slugs }: { slugs: string[] }) {
  const items = getPlatforms(slugs);
  if (!items.length) return null;

  return (
    <p className="mb-2 mt-6 flex flex-wrap items-center gap-2 text-base font-semibold text-text">
      {items.map((platform, index) => (
        <Fragment key={platform.platformType}>
          {index > 0 ? <span className="text-muted">/</span> : null}
          <span className="inline-flex items-center gap-2">
            <PlatformIcon slug={platform.platformType} size={20} />
            {platform.name}
          </span>
        </Fragment>
      ))}
    </p>
  );
}
