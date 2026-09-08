"use client";

import { useDemo } from "@/components/providers/DemoProvider";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export function SaveHeartButton({
  kind,
  id,
  className,
}: {
  kind: "product" | "service" | "creator";
  id: string;
  className?: string;
}) {
  const { saved, toggleSavedProduct, toggleSavedService, toggleSavedCreator } =
    useDemo();
  const on =
    kind === "product"
      ? saved.products.includes(id)
      : kind === "service"
        ? saved.services.includes(id)
        : saved.creators.includes(id);

  return (
    <button
      type="button"
      aria-pressed={on}
      aria-label={on ? "Remove from saved" : "Save"}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-md transition hover:scale-105 hover:border-white/40",
        on && "border-accent-3/50 bg-accent-3/20 text-accent-3",
        className,
      )}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (kind === "product") toggleSavedProduct(id);
        else if (kind === "service") toggleSavedService(id);
        else toggleSavedCreator(id);
      }}
    >
      <Icon name="heart" className={cn("h-4 w-4", on && "fill-current")} />
    </button>
  );
}
