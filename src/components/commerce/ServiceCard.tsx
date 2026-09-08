import Link from "next/link";
import { NICHE_LABELS } from "@/lib/constants";
import { formatUsd } from "@/lib/format";
import { getCreator } from "@/lib/mock";
import type { Service } from "@/lib/types";
import { Poster } from "@/components/media/Poster";
import { Badge } from "@/components/ui/Badge";

export function ServiceCard({ service }: { service: Service }) {
  const creator = getCreator(service.creatorId);
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/25"
    >
      <Poster seed={service.id} title={service.title} compact ratio="wide" />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Badge>{NICHE_LABELS[service.category]}</Badge>
        <h3 className="text-base font-semibold leading-snug">{service.title}</h3>
        <p className="line-clamp-2 text-sm text-muted">{service.description}</p>
        <div className="mt-auto flex items-center justify-between pt-2 text-sm">
          <span className="font-semibold">
            From {formatUsd(service.startingPriceCents)}
          </span>
          <span className="text-muted">{creator?.displayName}</span>
        </div>
      </div>
    </Link>
  );
}
