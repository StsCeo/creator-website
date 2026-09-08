import type { Metadata } from "next";
import { getDefaultCreator, servicesByCreator } from "@/lib/mock";
import { formatUsd } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { DataTable } from "@/components/dashboard/DataTable";
import { DemoAction } from "@/components/dashboard/DemoAction";

export const metadata: Metadata = { title: "Services" };

export default function CreatorServicesPage() {
  const creator = getDefaultCreator();
  const services = servicesByCreator(creator.id);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-bold tracking-tight">Services</h1>
        <DemoAction label="New service (demo)" />
      </div>
      <DemoNotice />
      <DataTable
        columns={["Title", "Starting at", "Delivery", "Status", "Packages", ""]}
        rows={services.map((s) => [
          s.title,
          formatUsd(s.startingPriceCents),
          `${s.deliveryDays}d`,
          <Badge
            key={s.id}
            tone={s.status === "published" ? "success" : "warning"}
          >
            {s.status}
          </Badge>,
          String(s.packages.length),
          <DemoAction key={`${s.id}-e`} label="Edit" />,
        ])}
      />
    </div>
  );
}
