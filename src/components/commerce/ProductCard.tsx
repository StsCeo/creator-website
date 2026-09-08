import Link from "next/link";
import { FORMAT_LABELS, NICHE_LABELS } from "@/lib/constants";
import { formatUsd } from "@/lib/format";
import { getCreator } from "@/lib/mock";
import type { DigitalProduct } from "@/lib/types";
import { Poster } from "@/components/media/Poster";
import { Badge } from "@/components/ui/Badge";

export function ProductCard({ product }: { product: DigitalProduct }) {
  const creator = getCreator(product.creatorId);
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/25"
    >
      <Poster seed={product.id} title={product.title} compact ratio="wide" />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex flex-wrap gap-1.5">
          <Badge>{NICHE_LABELS[product.category]}</Badge>
          <Badge tone="neutral">{FORMAT_LABELS[product.format]}</Badge>
        </div>
        <h3 className="text-base font-semibold leading-snug group-hover:text-white">
          {product.title}
        </h3>
        <p className="line-clamp-2 text-sm text-muted">{product.description}</p>
        <div className="mt-auto flex items-center justify-between pt-2 text-sm">
          <span className="font-semibold">{formatUsd(product.priceCents)}</span>
          <span className="text-muted">{creator?.displayName}</span>
        </div>
      </div>
    </Link>
  );
}
