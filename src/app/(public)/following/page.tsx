"use client";

import { creators } from "@/lib/mock";
import { useDemo } from "@/components/providers/DemoProvider";
import { CreatorCard } from "@/components/commerce/CreatorCard";
import { EmptyState } from "@/components/ui/EmptyState";
import Link from "next/link";

export default function FollowingPage() {
  const { followingIds } = useDemo();
  const items = creators.filter((c) => followingIds.includes(c.id));

  return (
    <div className="space-y-8">
      <header>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-2">
          Your space
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Following</h1>
        <p className="mt-2 max-w-xl text-muted">
          Creators you follow in this demo session. Follow is local UI only.
        </p>
      </header>
      {items.length === 0 ? (
        <EmptyState
          title="You are not following anyone"
          body="Visit a storefront and tap Follow to build this list."
        >
          <Link href="/creators" className="text-sm font-semibold underline">
            Browse creators
          </Link>
        </EmptyState>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      )}
    </div>
  );
}
