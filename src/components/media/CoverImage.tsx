import { cn } from "@/lib/cn";

export function CoverImage({
  src,
  alt,
  className,
  ratio = "wide",
}: {
  src: string;
  alt: string;
  className?: string;
  ratio?: "video" | "portrait" | "wide" | "square" | "fill";
}) {
  const ratioClass =
    ratio === "fill"
      ? "h-full w-full"
      : ratio === "portrait"
        ? "aspect-[9/16]"
        : ratio === "video"
          ? "aspect-video"
          : ratio === "square"
            ? "aspect-square"
            : "aspect-[4/3]";

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-white/5",
        ratioClass,
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-white/5"
      />
    </div>
  );
}
