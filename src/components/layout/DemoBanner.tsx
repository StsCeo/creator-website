import { DEMO_NOTICE } from "@/lib/constants";

export function DemoBanner() {
  return (
    <div className="border-b border-violet-400/20 bg-violet-500/10 px-4 py-2 text-center text-xs text-violet-100 sm:text-sm">
      {DEMO_NOTICE}
    </div>
  );
}
