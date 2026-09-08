import type { Metadata } from "next";
import { contentByCreator, getDefaultCreator } from "@/lib/mock";
import { formatDate } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { DataTable } from "@/components/dashboard/DataTable";
import { DemoAction } from "@/components/dashboard/DemoAction";

export const metadata: Metadata = { title: "Content" };

export default function ContentPage() {
  const items = contentByCreator(getDefaultCreator().id);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">UGC / content</h1>
        <DemoAction label="Schedule post (demo)" />
      </div>
      <DemoNotice>
        No social networks are connected. Scheduling does not publish.
      </DemoNotice>
      <DataTable
        columns={["Title", "Platform", "Status", "When"]}
        rows={items.map((item) => [
          item.title,
          item.platform,
          <Badge
            key={item.id}
            tone={item.status === "published" ? "success" : "neutral"}
          >
            {item.status}
          </Badge>,
          formatDate(item.scheduledAt),
        ])}
      />
    </div>
  );
}
