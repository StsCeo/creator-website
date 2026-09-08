"use client";

import Link from "next/link";
import { getProduct } from "@/lib/mock";
import { useDemo } from "@/components/providers/DemoProvider";
import { ProductCard } from "@/components/commerce/ProductCard";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { EmptyState } from "@/components/ui/EmptyState";
import { DemoAction } from "@/components/dashboard/DemoAction";

export default function LibraryPage() {
  const { libraryIds } = useDemo();
  const items = libraryIds
    .map((id) => getProduct(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="space-y-6">
      <header>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-2">
          Your space
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">My Library</h1>
        <p className="mt-2 max-w-xl text-muted">
          Mock purchases and demo checkouts. The original route{" "}
          <Link href="/buyer/library" className="underline">
            /buyer/library
          </Link>{" "}
          remains.
        </p>
      </header>
      <DemoNotice>
        Downloads are simulated. No files are hosted or transferred.
      </DemoNotice>
      {items.length === 0 ? (
        <EmptyState
          title="Library empty"
          body="Complete a demo checkout to add mock products here."
        />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((product) => (
            <div key={product.id} className="space-y-2">
              <ProductCard product={product} />
              <DemoAction
                label="Download (demo)"
                message="No file was downloaded. Secure delivery comes after production auth."
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
