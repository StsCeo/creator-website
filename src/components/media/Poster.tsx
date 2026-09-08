import { hashHue } from "@/lib/format";
import { cn } from "@/lib/cn";

const KINDS = ["cinematic", "studio", "warm", "cool", "editorial"] as const;

type PosterProps = {
  seed: string;
  title?: string;
  className?: string;
  ratio?: "video" | "portrait" | "wide" | "square";
  play?: boolean;
  compact?: boolean;
};

export function Poster({
  seed,
  title,
  className,
  ratio = "wide",
  play = false,
  compact = false,
}: PosterProps) {
  const hue = hashHue(seed);
  const kind = KINDS[hue % KINDS.length];
  const a = `hsl(${hue} 84% 58%)`;
  const b = `hsl(${(hue + 48) % 360} 78% 48%)`;
  const c = `hsl(${(hue + 210) % 360} 40% 14%)`;

  const ratioClass =
    ratio === "portrait"
      ? "aspect-[9/16]"
      : ratio === "video"
        ? "aspect-video"
        : ratio === "square"
          ? "aspect-square"
          : "aspect-[16/10]";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10",
        ratioClass,
        className,
      )}
      style={{
        background:
          kind === "cinematic"
            ? `radial-gradient(80% 70% at 20% 0%, ${a}55, transparent 55%), linear-gradient(160deg, ${c}, ${b}88)`
            : kind === "studio"
              ? `linear-gradient(135deg, ${a}cc, ${c} 60%), radial-gradient(circle at 80% 20%, ${b}aa, transparent 45%)`
              : kind === "warm"
                ? `linear-gradient(180deg, ${a}99, ${c}), radial-gradient(60% 50% at 70% 80%, ${b}bb, transparent)`
                : `linear-gradient(120deg, ${c}, ${a}66 40%, ${b}99)`,
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      {title && !compact && (
        <p className="absolute bottom-3 left-3 right-3 line-clamp-2 text-sm font-medium text-white/95">
          {title}
        </p>
      )}
      {play && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white shadow-lg backdrop-blur-sm">
            <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6 fill-current">
              <path d="M8 5.14v13.72L19 12 8 5.14z" />
            </svg>
          </span>
        </div>
      )}
    </div>
  );
}
