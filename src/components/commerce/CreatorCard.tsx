"use client";

import Link from "next/link";
import { NICHE_LABELS } from "@/lib/constants";
import { formatCompact } from "@/lib/format";
import { productCover } from "@/lib/media";
import { productsByCreator } from "@/lib/mock";
import type { Creator } from "@/lib/types";
import { CoverImage } from "@/components/media/CoverImage";
import { CreatorAvatar } from "@/components/media/CreatorAvatar";
import { Badge } from "@/components/ui/Badge";
import { Stars } from "@/components/ui/Stars";
import { SaveHeartButton } from "./SaveHeartButton";
import { FollowButton } from "./FollowButton";
import { cn } from "@/lib/cn";

export function CreatorCard({
  creator,
  compact,
}: {
  creator: Creator;
  compact?: boolean;
}) {
  const cover =
    productsByCreator(creator.id)[0]?.id != null
      ? productCover(productsByCreator(creator.id)[0].id)
      : "/hero/hero-creator-district.png";

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.04] shadow-[0_18px_50px_-28px_rgba(80,40,140,0.65)] transition duration-300 hover:-translate-y-1 hover:border-white/20",
        compact && "min-w-[16.5rem] sm:min-w-[18rem]",
      )}
    >
      <Link href={`/creators/${creator.slug}`} className="block">
        <div className="relative">
          <CoverImage src={cover} alt="" ratio="video" />
          <SaveHeartButton
            kind="creator"
            id={creator.id}
            className="absolute right-3 top-3"
          />
        </div>
        <div className="relative px-4 pb-4 pt-8">
          <CreatorAvatar
            creator={creator}
            size="lg"
            className="absolute -top-7 left-4 ring-4 ring-[#0c0914]"
          />
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold">{creator.displayName}</h3>
              <p className="text-sm text-muted">{creator.handle}</p>
            </div>
            {creator.isVerified && <Badge tone="accent">Verified</Badge>}
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {creator.niches.map((niche) => (
              <Badge key={niche}>{NICHE_LABELS[niche]}</Badge>
            ))}
          </div>
          <p className="mt-3 flex items-center gap-2 text-xs text-muted">
            <Stars value={creator.rating} />
            {formatCompact(creator.followers)} followers
          </p>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <FollowButton creatorId={creator.id} />
      </div>
    </article>
  );
}
