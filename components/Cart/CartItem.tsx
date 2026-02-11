"use client";

import Quantity from "@/components/Quantity";
import { CartItem as CartItemType } from "@/lib/types";
import { formatNumberWithSpaces } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDBContext } from "@/contexts/db";
import { db } from "@/utils/db";
import RemoveButton from "./RemoveButton";

export default function CartItem({ product }: { product: CartItemType }) {
  const { cart, setCart } = useDBContext();
  const [quantity, setQuantity] = useState(cart[product.id] || 1);
  const plusOnClick = () => {
    db.cart.add(product.id, 1);
    setCart(db.cart.get());
  };
  const minusOnClick = () => {
    db.cart.decrement(product.id);
    setCart(db.cart.get());
  };
  return (
    <Link
      href={`/products/${product.id}`}
      className="flex gap-4 border-b border-[var(--clr-neutral-300)] py-4 last:border-b-0 hover:text-inherit"
    >
      <Image
        src={product.image}
        alt={product.title}
        className="aspect-square max-w-28 rounded-lg p-2 object-contain"
        width={125}
        height={125}
        priority={true}
      />
      <div className="flex w-full flex-col gap-1">
        <div className="flex justify-between gap-4">
          <h3 className="self-center">{product.title}</h3>
          <RemoveButton productId={product.id} />
        </div>
        <span>${formatNumberWithSpaces(product.price)}</span>
        <div className="mt-auto">
          <Quantity
            quantity={quantity}
            setQuantity={setQuantity}
            plusOnClick={plusOnClick}
            minusOnClick={minusOnClick}
          />
        </div>
      </div>
    </Link>
  );
}
