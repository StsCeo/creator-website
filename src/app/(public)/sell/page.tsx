import type { Metadata } from "next";
import Link from "next/link";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = { title: "Sell on Creator District" };

export default function SellPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 py-6 text-center">
      <Badge tone="demo">Demo signup</Badge>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Sell on Creator District
      </h1>
      <p className="text-lg text-muted">
        Publish digital products, bookable services, and a storefront — then run
        the business from a Shopify-style studio. No account is created here.
      </p>
      <DemoNotice className="text-left">
        Start selling opens the fictional Elena Voss studio. There is no
        registration, password, or payout onboarding.
      </DemoNotice>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/dashboard"
          className="rounded-full bg-gradient-to-r from-accent via-accent-2 to-accent-3 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-2/30"
        >
          Open creator studio (demo)
        </Link>
        <Link
          href="/products"
          className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold"
        >
          Keep browsing
        </Link>
      </div>
    </div>
  );
}
