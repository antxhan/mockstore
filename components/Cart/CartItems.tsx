"use client";

import CartItem from "./CartItem";
import Link from "next/link";
import { CartItem as CartItemType } from "@/lib/types";

export default function CartItems({ products }: { products: CartItemType[] }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="rounded-2xl border border-[var(--clr-neutral-300)] p-4">
        Your Cart
      </h2>
      <div className="flex flex-col rounded-2xl border border-[var(--clr-neutral-300)] px-4">
        {products.length < 1 ? (
          <p className="py-4">
            No items in cart, go check out our{" "}
            <Link href="/products" className="font-bold">
              Products
            </Link>
          </p>
        ) : (
          products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
}
