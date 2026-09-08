import Link from "next/link";
import { creators, publishedProducts, publishedServices } from "@/lib/mock";
import { BRAND } from "@/lib/constants";
import { Poster } from "@/components/media/Poster";
import { ProductCard } from "@/components/commerce/ProductCard";
import { ServiceCard } from "@/components/commerce/ServiceCard";
import { CreatorCard } from "@/components/commerce/CreatorCard";
import { Shelf } from "@/components/commerce/Shelf";
import { Badge } from "@/components/ui/Badge";

export default function HomePage() {
  const products = publishedProducts().slice(0, 4);
  const services = publishedServices().slice(0, 4);
  const featured = [...creators].sort((a, b) => b.followers - a.followers);

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-10 sm:px-10 sm:py-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(70% 80% at 10% 0%, rgba(59,130,246,0.28), transparent 55%), radial-gradient(50% 50% at 90% 10%, rgba(139,92,246,0.24), transparent 50%)",
          }}
        />
        <Badge tone="demo">Prototype · mock catalog</Badge>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          {BRAND.name}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">{BRAND.tagline}</p>
        <p className="mt-2 max-w-xl text-sm text-muted">
          TikTok-style discovery on the public surface. Shopify-style operations
          for creators. USD · United States · 18+ (planned).
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/products"
            className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Browse products
          </Link>
          <Link
            href="/creators"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold"
          >
            Meet creators
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              Featured on the feed
            </h2>
            <p className="text-sm text-muted">
              Poster + play overlay. No video is streamed in this MVP.
            </p>
          </div>
        </div>
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          {featured.map((creator) => (
            <Link
              key={creator.id}
              href={`/creators/${creator.slug}`}
              className="w-44 shrink-0 snap-start sm:w-52"
            >
              <Poster
                seed={`${creator.id}-featured`}
                ratio="portrait"
                play
                title={creator.featuredTitle}
              />
              <p className="mt-2 text-sm font-medium">{creator.displayName}</p>
              <p className="line-clamp-2 text-xs text-muted">
                {creator.featuredSubtitle}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Shelf title="Digital product shelves" href="/products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Shelf>

      <Shelf title="Services to book" href="/services">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </Shelf>

      <Shelf title="Creators to watch" href="/creators">
        {creators.slice(0, 4).map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </Shelf>
    </div>
  );
}
