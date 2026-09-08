"use client";

import { Button } from "@/components/ui/Button";
import { useDemo } from "@/components/providers/DemoProvider";
import { cn } from "@/lib/cn";

export function SaveButton({
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
    <Button
      variant="secondary"
      className={cn(className)}
      onClick={() => {
        if (kind === "product") toggleSavedProduct(id);
        else if (kind === "service") toggleSavedService(id);
        else toggleSavedCreator(id);
      }}
    >
      {on ? "Saved" : "Save"}
    </Button>
  );
}
