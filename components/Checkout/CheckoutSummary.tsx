"use client";

import { formatNumberWithSpaces, sumTotal } from "@/utils/utils";
import { CartItem } from "@/lib/types";
import CheckoutItem from "./CheckoutItem";
import { useDBContext } from "@/contexts/db";
import { useEffect, useState } from "react";
import { api } from "@/utils/api";

export default function CheckoutSummary() {
  const { cart } = useDBContext();
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await Promise.all(
        Object.entries(cart).map(async ([productId, quantity]) => {
          const product = await api.product(parseInt(productId));
          return { ...product, quantity };
        }),
      );
      setItems([...new Set(fetchedProducts)]);
    };

    if (Object.keys(cart).length) fetchProducts();
    else setItems([]);
  }, [cart]);

  return (
    <section className="sticky top-4 row-span-5 col-start-2 max-h-full rounded-2xl border border-neutral-300 p-4 max-[700px]:static max-[700px]:row-start-1 max-[700px]:col-start-1">
      <main className="flex flex-col">
        <h2>Total</h2>
        <div className="flex flex-col gap-2 border-b border-neutral-300 pb-4">
          <div className="flex items-center justify-between">
            <h3>Cart</h3>
            <span>
              {formatNumberWithSpaces(
                items.reduce((acc, item) => acc + +item.quantity, 0),
              )}{" "}
              items
            </span>
          </div>
          <div className="flex max-h-[50vh] flex-col gap-2 overflow-scroll">
            {items.map((item) => (
              <CheckoutItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2">
          <h3>Subtotal</h3>
          <span>${formatNumberWithSpaces(sumTotal(items))}</span>
        </div>
      </main>
    </section>
  );
}
