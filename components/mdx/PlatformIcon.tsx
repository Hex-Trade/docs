import { getPlatform } from "@/lib/platforms";

export function PlatformIcon({
  slug,
  size = 22,
}: {
  slug: string;
  size?: number;
}) {
  const platform = getPlatform(slug);
  if (!platform) return null;

  return (
    <img
      src={`/images/platforms/${platform.file}`}
      alt=""
      width={size}
      height={size}
      className="inline-icon rounded-[4px] object-contain"
      style={{ width: size, height: size }}
    />
  );
}
