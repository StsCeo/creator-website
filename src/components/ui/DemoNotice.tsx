import type { ReactNode } from "react";
import { DEMO_NOTICE } from "@/lib/constants";
import { Badge } from "./Badge";
import { cn } from "@/lib/cn";

export function DemoNotice({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-start gap-3 rounded-2xl border border-violet-400/20 bg-violet-400/10 px-4 py-3 text-sm text-violet-100",
        className,
      )}
    >
      <Badge tone="demo">Demo</Badge>
      <p className="min-w-0 flex-1 text-violet-100/90">
        {children ?? DEMO_NOTICE}
      </p>
    </div>
  );
}
