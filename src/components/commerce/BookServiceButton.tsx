"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Service } from "@/lib/types";
import { formatUsd } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { Modal } from "@/components/ui/Modal";
import { useDemo } from "@/components/providers/DemoProvider";

export function BookServiceButton({ service }: { service: Service }) {
  const router = useRouter();
  const { simulateBooking } = useDemo();
  const [open, setOpen] = useState(false);
  const [pkgIndex, setPkgIndex] = useState(0);
  const [date, setDate] = useState("2026-09-24");
  const [done, setDone] = useState(false);
  const pkg = service.packages[pkgIndex] ?? service.packages[0];

  function submit() {
    simulateBooking({
      serviceId: service.id,
      creatorId: service.creatorId,
      packageName: pkg.name,
      amountCents: pkg.priceCents,
      requestedFor: date,
    });
    setDone(true);
  }

  return (
    <>
      <Button
        size="lg"
        onClick={() => {
          setDone(false);
          setOpen(true);
        }}
      >
        Book service (demo)
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={`Book ${service.title}`}
      >
        <DemoNotice className="mb-4">
          Simulated booking only. No message, calendar invite, or payment is
          sent. The demo buyer identity is used automatically — do not enter
          personal information.
        </DemoNotice>
        {done ? (
          <div className="space-y-4">
            <p className="text-sm">
              Request recorded in local demo state as{" "}
              <span className="font-medium">{pkg.name}</span> for {date}.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => {
                  setOpen(false);
                  router.push("/buyer/bookings");
                }}
              >
                View demo bookings
              </Button>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <fieldset className="space-y-2">
              <legend className="text-sm font-medium">Package</legend>
              {service.packages.map((item, index) => (
                <label
                  key={item.name}
                  className="flex cursor-pointer items-start justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3"
                >
                  <span>
                    <input
                      type="radio"
                      className="mr-2 accent-blue-500"
                      checked={pkgIndex === index}
                      onChange={() => setPkgIndex(index)}
                    />
                    <span className="font-medium">{item.name}</span>
                    <span className="mt-1 block text-xs text-muted">
                      {item.includes.join(" · ")} · {item.deliveryDays}d
                    </span>
                  </span>
                  <span className="text-sm font-semibold">
                    {formatUsd(item.priceCents)}
                  </span>
                </label>
              ))}
            </fieldset>
            <label className="block text-sm">
              <span className="font-medium">Preferred date (demo)</span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-accent"
              />
            </label>
            <Badge tone="demo">No name, email, or card fields on purpose</Badge>
            <Button className="w-full" size="lg" onClick={submit}>
              Send booking request (demo)
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
}
