"use client";

import { useDemo } from "@/components/providers/DemoProvider";
import { Button } from "@/components/ui/Button";

export function FollowButton({ creatorId }: { creatorId: string }) {
  const { followingIds, toggleFollow } = useDemo();
  const on = followingIds.includes(creatorId);
  return (
    <Button
      variant={on ? "secondary" : "primary"}
      size="sm"
      className="w-full"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFollow(creatorId);
      }}
    >
      {on ? "Following" : "Follow"}
    </Button>
  );
}
