type VideoProps = {
  src: string;
  poster?: string;
};

export function Video({ src, poster }: VideoProps) {
  return (
    <video
      src={src}
      poster={poster}
      controls
      playsInline
      preload="metadata"
      className="my-4 w-full rounded-xl border border-border"
    />
  );
}
