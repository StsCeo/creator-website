import type { Metadata } from "next";
import { getDefaultCreator, portfolioByCreator } from "@/lib/mock";
import { Poster } from "@/components/media/Poster";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { DemoAction } from "@/components/dashboard/DemoAction";

export const metadata: Metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  const items = portfolioByCreator(getDefaultCreator().id);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
        <DemoAction
          label="Upload (disabled)"
          message="Secure uploads are not enabled in this prototype. No files are accepted."
        />
      </div>
      <DemoNotice>
        Media is a generated poster. File pickers are not connected.
      </DemoNotice>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-2xl border border-white/10"
          >
            <Poster seed={item.id} compact ratio="square" />
            <div className="p-3">
              <p className="font-medium">{item.title}</p>
              <p className="text-xs text-muted">
                {item.kind} · {item.year}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
