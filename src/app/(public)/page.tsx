import Link from "next/link";
import {
  creators,
  freeProducts,
  getDefaultCreator,
  popularProducts,
  productsByCreator,
  publishedServices,
  trendingProducts,
} from "@/lib/mock";
import { NICHE_LABELS } from "@/lib/constants";
import { CATEGORY_COVER, HERO_IMAGE, SPOTLIGHT_IMAGE } from "@/lib/media";
import type { Niche } from "@/lib/types";
import { ProductCard } from "@/components/commerce/ProductCard";
import { ServiceCard } from "@/components/commerce/ServiceCard";
import { CreatorCard } from "@/components/commerce/CreatorCard";
import { Carousel, SectionHeader } from "@/components/commerce/MarketSection";
import { CoverImage } from "@/components/media/CoverImage";
import { CreatorAvatar } from "@/components/media/CreatorAvatar";
import { Badge } from "@/components/ui/Badge";
import { formatCompact } from "@/lib/format";

const NICHES_LIST = Object.keys(NICHE_LABELS) as Niche[];

export default function HomePage() {
  const trending = trendingProducts().slice(0, 8);
  const madeForYou = popularProducts().slice(2, 8);
  const popular = popularProducts().slice(0, 8);
  const services = publishedServices().slice(0, 8);
  const free = freeProducts();
  const featuredCreators = [...creators].sort((a, b) => b.followers - a.followers);
  const spotlight = getDefaultCreator();
  const spotlightProduct = productsByCreator(spotlight.id).find((p) => p.priceCents > 0);

  return (
    <div className="space-y-16 pb-8">
      <section className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_120px_-48px_rgba(90,40,160,0.9)]">
        <div className="absolute inset-0">
          <CoverImage src={HERO_IMAGE} alt="" className="h-full rounded-none border-0" ratio="fill" />
        </div>
        <div className="relative grid min-h-[28rem] items-end gap-8 bg-gradient-to-r from-[#09060f]/90 via-[#09060f]/55 to-transparent px-6 py-10 sm:px-10 sm:py-16 lg:min-h-[32rem] lg:px-14">
          <div className="max-w-2xl">
            <Badge tone="demo">Creator District · demo catalog</Badge>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl sm:leading-[1.05]">
              Everything creators make, all in one place
            </h1>
            <p className="mt-4 max-w-lg text-base text-white/75 sm:text-lg">
              Discover digital products, book services, and follow the people
              behind the work. USD · United States · 18+.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="rounded-full bg-gradient-to-r from-accent via-accent-2 to-accent-3 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-2/30 transition hover:opacity-90"
              >
                Explore Products
              </Link>
              <Link
                href="/sell"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur-md transition hover:border-white/40"
              >
                Start Selling
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Now playing"
          title="Trending Now"
          href="/trending"
        />
        <Carousel>
          {trending.map((product) => (
            <div key={product.id} className="w-[17rem] shrink-0 snap-start sm:w-[19rem]">
              <ProductCard product={product} />
            </div>
          ))}
        </Carousel>
      </section>

      <section>
        <SectionHeader title="Made for You" href="/products" />
        <Carousel>
          {madeForYou.map((product) => (
            <div key={product.id} className="w-[17rem] shrink-0 snap-start sm:w-[19rem]">
              <ProductCard product={product} />
            </div>
          ))}
        </Carousel>
      </section>

      <section>
        <SectionHeader title="Explore Categories" href="/products" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {NICHES_LIST.map((niche) => (
            <Link
              key={niche}
              href={`/products?niche=${niche}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10"
            >
              <CoverImage src={CATEGORY_COVER[niche]} alt="" ratio="video" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4">
                <p className="text-lg font-semibold">{NICHE_LABELS[niche]}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Featured Creators" href="/creators" />
        <Carousel>
          {featuredCreators.map((creator) => (
            <div key={creator.id} className="w-[17rem] shrink-0 snap-start sm:w-[19rem]">
              <CreatorCard creator={creator} />
            </div>
          ))}
        </Carousel>
      </section>

      <section>
        <SectionHeader title="Popular Digital Products" href="/products" />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {popular.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Book a Creator" href="/services" />
        <Carousel>
          {services.map((service) => (
            <div key={service.id} className="w-[18rem] shrink-0 snap-start sm:w-[21rem]">
              <ServiceCard service={service} />
            </div>
          ))}
        </Carousel>
      </section>

      <section>
        <SectionHeader title="Free Resources" href="/products?niche=all" />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {free.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="grid overflow-hidden rounded-[2rem] border border-white/10 lg:grid-cols-[1.3fr_1fr]">
        <CoverImage src={SPOTLIGHT_IMAGE} alt="" className="min-h-[16rem] rounded-none border-0 lg:h-full" ratio="fill" />
        <div className="flex flex-col justify-center bg-white/[0.03] p-7 sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-2">
            Creator Spotlight
          </p>
          <div className="mt-4 flex items-center gap-3">
            <CreatorAvatar creator={spotlight} size="lg" />
            <div>
              <h2 className="text-2xl font-bold">{spotlight.displayName}</h2>
              <p className="text-sm text-muted">
                {spotlight.handle} · {formatCompact(spotlight.followers)} followers
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">{spotlight.bio}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/creators/${spotlight.slug}`}
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black"
            >
              Visit storefront
            </Link>
            {spotlightProduct && (
              <Link
                href={`/products/${spotlightProduct.slug}`}
                className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold"
              >
                Shop {spotlightProduct.title}
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-12 text-center sm:px-12 sm:py-16">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent-2/20 to-accent-3/20"
        />
        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Sell on Creator District
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Open a storefront, publish products and services, and run your
            creator business from one studio. This signup is a demo — nothing is
            submitted.
          </p>
          <Link
            href="/sell"
            className="mt-7 inline-flex rounded-full bg-gradient-to-r from-accent via-accent-2 to-accent-3 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-2/30"
          >
            Start selling
          </Link>
        </div>
      </section>
    </div>
  );
}
