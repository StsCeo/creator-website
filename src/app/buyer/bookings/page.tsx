"use client";

import { getCreator, getService } from "@/lib/mock";
import { formatUsd } from "@/lib/format";
import { useDemo } from "@/components/providers/DemoProvider";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { DataTable } from "@/components/dashboard/DataTable";
import { Badge } from "@/components/ui/Badge";

export default function BuyerBookingsPage() {
  const { bookings } = useDemo();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Bookings</h1>
      <DemoNotice>
        Booking requests never leave this browser. Creators are not notified.
      </DemoNotice>
      <DataTable
        columns={["Service", "Creator", "Package", "Date", "Amount", "Status"]}
        rows={bookings.map((b) => {
          const service = getService(b.serviceId);
          const creator = getCreator(b.creatorId);
          return [
            service?.title ?? b.serviceId,
            creator?.displayName ?? "—",
            b.packageName,
            b.requestedFor,
            formatUsd(b.amountCents),
            <Badge key={b.id} tone="demo">
              {b.status}
            </Badge>,
          ];
        })}
      />
    </div>
  );
}
