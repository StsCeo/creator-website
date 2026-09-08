import type { Metadata } from "next";
import { creators } from "@/lib/mock";
import { NICHE_LABELS } from "@/lib/constants";
import { formatCompact } from "@/lib/format";
import { DataTable } from "@/components/dashboard/DataTable";
import { Badge } from "@/components/ui/Badge";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { DemoAction } from "@/components/dashboard/DemoAction";

export const metadata: Metadata = { title: "Admin · Creators" };

export default function AdminCreatorsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Creators</h1>
      <DemoNotice>
        Tenant isolation is illustrated by creatorId keys. There is no real
        tenant boundary yet.
      </DemoNotice>
      <DataTable
        columns={["Creator", "Handle", "Niche", "Followers", "Status", ""]}
        rows={creators.map((c) => [
          c.displayName,
          c.handle,
          c.niches.map((n) => NICHE_LABELS[n]).join(", "),
          formatCompact(c.followers),
          c.isVerified ? (
            <Badge key={c.id} tone="accent">
              verified
            </Badge>
          ) : (
            <Badge key={c.id}>unverified</Badge>
          ),
          <DemoAction key={`${c.id}-m`} label="Moderate" />,
        ])}
      />
    </div>
  );
}
