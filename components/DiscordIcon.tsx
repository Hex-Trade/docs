export const DISCORD_ICON = "/images/nav/discord.png";

export function DiscordIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <img
      src={DISCORD_ICON}
      alt=""
      width={size}
      height={size}
      className={`docs-icon block shrink-0 rounded-[3px] object-contain object-center ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
