"use client";

import Link from "next/link";
import { getProduct } from "@/lib/mock";
import { formatUsd } from "@/lib/format";
import { useDemo } from "@/components/providers/DemoProvider";
import { Button } from "@/components/ui/Button";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { EmptyState } from "@/components/ui/EmptyState";
import { CoverImage } from "@/components/media/CoverImage";
import { productCover } from "@/lib/media";

export default function CartPage() {
  const { cart, setCartQty, removeFromCart, cartTotalCents, clearCart } =
    useDemo();

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Demo cart</h1>
      <DemoNotice>
        Cart contents stay in this browser session. No accounts and no payment
        methods are stored. Checkout never collects cards, addresses, or tax IDs.
      </DemoNotice>
      {cart.length === 0 ? (
        <EmptyState
          title="Cart is empty"
          body="Add a digital product to try the mock checkout."
        >
          <Link
            href="/products"
            className="text-sm font-semibold text-sky-300 hover:underline"
          >
            Browse products
          </Link>
        </EmptyState>
      ) : (
        <>
          <ul className="space-y-3">
            {cart.map((item) => {
              const product = getProduct(item.productId);
              if (!product) return null;
              return (
                <li
                  key={item.productId}
                  className="flex gap-4 rounded-2xl border border-white/10 p-3"
                >
                  <div className="w-28 shrink-0 overflow-hidden rounded-xl">
                    <CoverImage
                      src={productCover(product.id)}
                      alt=""
                      ratio="wide"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/products/${product.slug}`}
                      className="font-semibold hover:underline"
                    >
                      {product.title}
                    </Link>
                    <p className="text-sm text-muted">
                      {formatUsd(product.priceCents)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <label className="text-xs text-muted">
                        Qty
                        <input
                          type="number"
                          min={1}
                          max={9}
                          value={item.quantity}
                          onChange={(e) =>
                            setCartQty(
                              item.productId,
                              Number(e.target.value) || 1,
                            )
                          }
                          className="ml-2 w-16 rounded-lg border border-white/10 bg-white/5 px-2 py-1"
                        />
                      </label>
                      <button
                        type="button"
                        className="text-xs text-muted hover:text-rose-300"
                        onClick={() => removeFromCart(item.productId)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
            <p className="text-lg font-semibold">
              Total {formatUsd(cartTotalCents)}
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" onClick={clearCart}>
                Clear
              </Button>
              <Link
                href="/checkout"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-accent to-accent-2 px-5 py-2 text-sm font-semibold text-white"
              >
                Mock checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
