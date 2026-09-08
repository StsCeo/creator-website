import { cn } from "@/lib/cn";

export function Stars({ value, className }: { value: number; className?: string }) {
  const rounded = Math.round(value);
  return (
    <span
      className={cn("inline-flex items-center gap-0.5 text-accent-3", className)}
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={cn("h-3.5 w-3.5", i < rounded ? "fill-current" : "fill-white/15")}
          aria-hidden
        >
          <path d="M10 1.8 12.4 7h5.8l-4.7 3.5 1.8 5.7L10 12.8 4.7 16.2l1.8-5.7L1.8 7h5.8L10 1.8z" />
        </svg>
      ))}
    </span>
  );
}
