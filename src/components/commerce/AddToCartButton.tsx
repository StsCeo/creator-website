"use client";

import { Button } from "@/components/ui/Button";
import { useDemo } from "@/components/providers/DemoProvider";

export function AddToCartButton({
  productId,
  size = "lg",
}: {
  productId: string;
  size?: "sm" | "md" | "lg";
}) {
  const { addToCart } = useDemo();
  return (
    <Button size={size} onClick={() => addToCart(productId)}>
      Add to demo cart
    </Button>
  );
}
