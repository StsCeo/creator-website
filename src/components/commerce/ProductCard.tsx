"use client";

import Link from "next/link";
import { NICHE_LABELS } from "@/lib/constants";
import { formatUsd } from "@/lib/format";
import { getCreator } from "@/lib/mock";
import { productCover } from "@/lib/media";
import type { DigitalProduct } from "@/lib/types";
import { CoverImage } from "@/components/media/CoverImage";
import { CreatorAvatar } from "@/components/media/CreatorAvatar";
import { Badge } from "@/components/ui/Badge";
import { Stars } from "@/components/ui/Stars";
import { SaveHeartButton } from "./SaveHeartButton";
import { cn } from "@/lib/cn";

export function ProductCard({
  product,
  compact,
}: {
  product: DigitalProduct;
  compact?: boolean;
}) {
  const creator = getCreator(product.creatorId);
  const price =
    product.priceCents === 0 ? "Free" : formatUsd(product.priceCents);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.04] shadow-[0_18px_50px_-28px_rgba(80,40,140,0.65)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_60px_-24px_rgba(120,70,200,0.7)]",
        compact && "min-w-[16.5rem] sm:min-w-[18rem]",
      )}
    >
      <Link href={`/products/${product.slug}`} className="flex h-full flex-col">
        <div className="relative">
          <CoverImage
            src={productCover(product.id)}
            alt={product.title}
            ratio="wide"
          />
          <Badge className="absolute left-3 top-3 bg-black/45 backdrop-blur-md">
            {NICHE_LABELS[product.category]}
          </Badge>
          <SaveHeartButton
            kind="product"
            id={product.id}
            className="absolute right-3 top-3"
          />
        </div>
        <div className="flex flex-1 flex-col gap-2.5 p-4">
          <h3 className="line-clamp-2 text-[15px] font-semibold leading-snug tracking-tight">
            {product.title}
          </h3>
          {creator && (
            <div className="flex items-center gap-2 text-sm text-muted">
              <CreatorAvatar creator={creator} size="sm" />
              <span className="truncate">{creator.displayName}</span>
            </div>
          )}
          <div className="mt-auto flex items-center justify-between gap-3 pt-1">
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <Stars value={product.rating} />
              <span>{product.rating.toFixed(1)}</span>
              <span>({product.reviewCount})</span>
            </span>
            <span className="text-sm font-semibold text-foreground">{price}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
