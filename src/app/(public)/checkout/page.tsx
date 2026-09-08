"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getProduct } from "@/lib/mock";
import { DEFAULT_BUYER_NAME } from "@/lib/constants";
import { formatUsd } from "@/lib/format";
import { useDemo } from "@/components/providers/DemoProvider";
import { Button } from "@/components/ui/Button";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { EmptyState } from "@/components/ui/EmptyState";
import { Badge } from "@/components/ui/Badge";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotalCents, simulateCheckout } = useDemo();
  const [done, setDone] = useState(false);

  if (cart.length === 0 && !done) {
    return (
      <div className="mx-auto max-w-lg">
        <EmptyState
          title="Nothing to check out"
          body="Add products to the demo cart first."
        >
          <Link href="/products" className="text-sm font-semibold underline">
            Browse products
          </Link>
        </EmptyState>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Mock checkout</h1>
      <DemoNotice>
        This is not Stripe. There is no card form on purpose. Clicking pay only
        updates local demo state. Future live payments will use Stripe-hosted
        Checkout so card data never touches this origin.
      </DemoNotice>
      {done ? (
        <div className="space-y-4 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
          <Badge tone="success">Demo order placed</Badge>
          <p className="text-sm">
            No charge was created. Items were copied into the mock buyer
            library for {DEFAULT_BUYER_NAME}.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => router.push("/buyer/library")}>
              Open library
            </Button>
            <Button variant="secondary" onClick={() => router.push("/buyer/orders")}>
              View orders
            </Button>
          </div>
        </div>
      ) : (
        <>
          <ul className="space-y-2 rounded-2xl border border-white/10 p-4 text-sm">
            {cart.map((item) => {
              const product = getProduct(item.productId);
              if (!product) return null;
              return (
                <li key={item.productId} className="flex justify-between gap-3">
                  <span>
                    {product.title} × {item.quantity}
                  </span>
                  <span>{formatUsd(product.priceCents * item.quantity)}</span>
                </li>
              );
            })}
            <li className="flex justify-between border-t border-white/10 pt-2 font-semibold">
              <span>Total (USD)</span>
              <span>{formatUsd(cartTotalCents)}</span>
            </li>
          </ul>
          <div className="rounded-2xl border border-white/10 p-4 text-sm text-muted">
            <p>
              Payer: {DEFAULT_BUYER_NAME} (fictional demo buyer, United States)
            </p>
            <p className="mt-1">Region: United States · Currency: USD</p>
            <p className="mt-1">Age gate: 18+ (planned for launch)</p>
            <p className="mt-3 text-xs">
              Card, bank, tax, and address fields are intentionally omitted.
            </p>
          </div>
          <Button
            size="lg"
            className="w-full"
            onClick={() => {
              const ok = simulateCheckout();
              if (ok) setDone(true);
            }}
          >
            Simulate Stripe payment (demo)
          </Button>
        </>
      )}
    </div>
  );
}
