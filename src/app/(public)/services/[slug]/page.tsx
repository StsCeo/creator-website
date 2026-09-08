import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getCreator, getService, services } from "@/lib/mock";
import { NICHE_LABELS } from "@/lib/constants";
import { formatUsd } from "@/lib/format";
import { serviceCover } from "@/lib/media";
import { CoverImage } from "@/components/media/CoverImage";
import { CreatorAvatar } from "@/components/media/CreatorAvatar";
import { Badge } from "@/components/ui/Badge";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { BookServiceButton } from "@/components/commerce/BookServiceButton";
import { SaveButton } from "@/components/commerce/SaveButton";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return { title: service?.title ?? "Service" };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const creator = getCreator(service.creatorId);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div className="space-y-5">
        <CoverImage
          src={serviceCover(service.id)}
          alt={service.title}
          ratio="wide"
          className="rounded-[1.6rem] border border-white/10"
        />
        <h1 className="text-3xl font-bold tracking-tight">{service.title}</h1>
        {creator && (
          <Link
            href={`/creators/${creator.slug}`}
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground"
          >
            <CreatorAvatar creator={creator} size="sm" />
            {creator.displayName}
          </Link>
        )}
        <p className="text-sm leading-relaxed text-muted">{service.description}</p>
        <Badge>{NICHE_LABELS[service.category]}</Badge>
      </div>
      <aside className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-sm text-muted">Starting at</p>
        <p className="text-3xl font-bold">
          {formatUsd(service.startingPriceCents)}
        </p>
        <p className="text-sm text-muted">
          Typical delivery {service.deliveryDays} days · {service.rating} rating
        </p>
        <ul className="space-y-3">
          {service.packages.map((pkg) => (
            <li
              key={pkg.name}
              className="rounded-2xl border border-white/10 p-4"
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-semibold">{pkg.name}</p>
                <p>{formatUsd(pkg.priceCents)}</p>
              </div>
              <p className="mt-1 text-xs text-muted">{pkg.deliveryDays} days</p>
              <p className="mt-2 text-sm text-muted">
                {pkg.includes.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
        <DemoNotice>
          Bookings are local UI only. No email, calendar, or Stripe call is made.
        </DemoNotice>
        <div className="flex flex-wrap gap-3">
          <BookServiceButton service={service} />
          <SaveButton kind="service" id={service.id} />
        </div>
      </aside>
    </div>
  );
}
