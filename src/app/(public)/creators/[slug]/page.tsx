import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  creators,
  getCreator,
  portfolioByCreator,
  productsByCreator,
  servicesByCreator,
} from "@/lib/mock";
import { formatCompact } from "@/lib/format";
import { NICHE_LABELS } from "@/lib/constants";
import { productCover } from "@/lib/media";
import { CoverImage } from "@/components/media/CoverImage";
import { CreatorAvatar } from "@/components/media/CreatorAvatar";
import { Poster } from "@/components/media/Poster";
import { Badge } from "@/components/ui/Badge";
import { ProductCard } from "@/components/commerce/ProductCard";
import { ServiceCard } from "@/components/commerce/ServiceCard";
import { SaveButton } from "@/components/commerce/SaveButton";
import { FollowButton } from "@/components/commerce/FollowButton";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return creators.map((creator) => ({ slug: creator.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const creator = getCreator(slug);
  return { title: creator?.displayName ?? "Creator" };
}

export default async function CreatorStorefrontPage({ params }: Props) {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) notFound();

  const products = productsByCreator(creator.id).filter(
    (p) => p.status === "published",
  );
  const services = servicesByCreator(creator.id).filter(
    (s) => s.status === "published",
  );
  const work = portfolioByCreator(creator.id);

  return (
    <div className="space-y-10">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(16rem,1fr)]">
        <CoverImage
          src={
            products[0]
              ? productCover(products[0].id)
              : "/hero/hero-creator-district.png"
          }
          alt=""
          ratio="video"
          className="rounded-[1.8rem] border border-white/10"
        />
        <div className="flex flex-col justify-center rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6">
          <div className="mb-4">
            <CreatorAvatar creator={creator} size="lg" />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {creator.isVerified && <Badge tone="accent">Verified</Badge>}
            {creator.niches.map((n) => (
              <Badge key={n}>{NICHE_LABELS[n]}</Badge>
            ))}
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight">
            {creator.displayName}
          </h1>
          <p className="text-muted">{creator.handle}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{creator.bio}</p>
          <p className="mt-4 text-sm text-muted">
            {creator.location} · {formatCompact(creator.followers)} followers ·{" "}
            {creator.rating} ({creator.reviewCount} reviews)
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <FollowButton creatorId={creator.id} />
            <SaveButton kind="creator" id={creator.id} />
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold">Featured</h2>
        <div className="rounded-3xl border border-white/10 p-4 sm:p-6">
          <p className="text-lg font-semibold">{creator.featuredTitle}</p>
          <p className="mt-1 text-sm text-muted">{creator.featuredSubtitle}</p>
        </div>
      </section>

      {products.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-bold">Digital products</h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {services.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-bold">Services</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </section>
      )}

      {work.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-bold">Portfolio</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {work.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl border border-white/10"
              >
                <Poster seed={item.id} compact ratio="square" />
                <div className="p-3">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-xs text-muted">
                    {item.kind} · {item.year}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <p className="text-xs text-muted">
        Storefront for a fictional creator.{" "}
        <Link href="/dashboard" className="underline">
          Open the demo creator dashboard
        </Link>
        .
      </p>
    </div>
  );
}
