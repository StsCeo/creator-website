"use client";

import { getProduct } from "@/lib/mock";
import { useDemo } from "@/components/providers/DemoProvider";
import { ProductCard } from "@/components/commerce/ProductCard";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { EmptyState } from "@/components/ui/EmptyState";
import { DemoAction } from "@/components/dashboard/DemoAction";

export default function BuyerLibraryPage() {
  const { libraryIds } = useDemo();
  const items = libraryIds
    .map((id) => getProduct(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Digital library</h1>
      <DemoNotice>
        Downloads are simulated. Files are not hosted and nothing is transferred.
      </DemoNotice>
      {items.length === 0 ? (
        <EmptyState
          title="Library empty"
          body="Complete a demo checkout to add mock products here."
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
