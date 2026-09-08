import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getCreator, getProduct, products } from "@/lib/mock";
import { FORMAT_LABELS, NICHE_LABELS } from "@/lib/constants";
import { formatUsd } from "@/lib/format";
import { Poster } from "@/components/media/Poster";
import { Badge } from "@/components/ui/Badge";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { AddToCartButton } from "@/components/commerce/AddToCartButton";
import { SaveButton } from "@/components/commerce/SaveButton";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product?.title ?? "Product" };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const creator = getCreator(product.creatorId);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
      <Poster seed={product.id} ratio="video" title={product.title} />
      <div className="space-y-5">
        <div className="flex flex-wrap gap-2">
          <Badge>{NICHE_LABELS[product.category]}</Badge>
          <Badge>{FORMAT_LABELS[product.format]}</Badge>
          {product.status !== "published" && (
            <Badge tone="warning">{product.status}</Badge>
          )}
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{product.title}</h1>
        {creator && (
          <Link
            href={`/creators/${creator.slug}`}
            className="text-sm text-muted hover:text-foreground"
          >
            by {creator.displayName} {creator.handle}
          </Link>
        )}
        <p className="text-2xl font-semibold">{formatUsd(product.priceCents)}</p>
        <p className="text-sm leading-relaxed text-muted">{product.description}</p>
        <p className="text-xs text-muted">
          {product.rating} rating · {product.reviewCount} reviews ·{" "}
          {product.salesCount} demo sales
        </p>
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <DemoNotice>
          Checkout is simulated. Future payments will use Stripe-hosted
          collection. Never enter card numbers here.
        </DemoNotice>
        <div className="flex flex-wrap gap-3">
          <AddToCartButton productId={product.id} />
          <SaveButton kind="product" id={product.id} />
        </div>
      </div>
    </div>
  );
}
