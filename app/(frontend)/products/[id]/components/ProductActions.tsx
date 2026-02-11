"use client";

import LikeButton from "@/components/LikeButton";
import AddToCartButton from "./AddToCartButton";
import { Product } from "@/lib/types";
import Quantity from "@/components/Quantity";
import { useState } from "react";

export default function ProductActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="mt-auto">
        <h3 className="mb-2">Quantity</h3>
        <Quantity
          quantity={quantity}
          setQuantity={setQuantity}
          disabled={quantity === 1}
        />
      </div>
      <div className="flex items-center gap-4">
        <AddToCartButton productId={product.id} quantity={quantity} />
        <LikeButton
          productId={product.id}
          className="!flex h-14 w-14 items-center justify-center rounded-2xl !bg-neutral-200 hover:!bg-neutral-100"
        />
      </div>
    </>
  );
}
