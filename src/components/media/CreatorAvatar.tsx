import { creatorAvatar } from "@/lib/media";
import { cn } from "@/lib/cn";
import type { Creator } from "@/lib/types";

export function CreatorAvatar({
  creator,
  size = "md",
  className,
}: {
  creator: Creator;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dim =
    size === "sm" ? "h-7 w-7" : size === "lg" ? "h-14 w-14" : "h-9 w-9";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={creatorAvatar(creator.id)}
      alt=""
      className={cn(
        "rounded-full object-cover ring-2 ring-white/15",
        dim,
        className,
      )}
    />
  );
}
