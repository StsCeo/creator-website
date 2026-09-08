import Link from "next/link";
import { NICHE_LABELS } from "@/lib/constants";
import { formatCompact } from "@/lib/format";
import type { Creator } from "@/lib/types";
import { Poster } from "@/components/media/Poster";
import { Badge } from "@/components/ui/Badge";

export function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <Link
      href={`/creators/${creator.slug}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/25"
    >
      <Poster seed={creator.id} play ratio="video" compact />
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold">{creator.displayName}</h3>
          {creator.isVerified && <Badge tone="accent">Verified</Badge>}
        </div>
        <p className="text-sm text-muted">{creator.handle}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {creator.niches.map((niche) => (
            <Badge key={niche}>{NICHE_LABELS[niche]}</Badge>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted">
          {formatCompact(creator.followers)} following · {creator.rating} rating
        </p>
      </div>
    </Link>
  );
}
