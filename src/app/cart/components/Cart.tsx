"use client";

import { useDBContext } from "@/contexts/db";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary/CartSummary";
import { useEffect, useState } from "react";
import { api } from "@/utils/api";
import { CartItem } from "@/lib/types";

export default function Cart() {
  const { cart } = useDBContext();
  const [products, setProducts] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await Promise.all(
        Object.entries(cart).map(async ([productId, quantity]) => {
          const product = await api.product(parseInt(productId));
          return { ...product, quantity };
        })
      );
      setProducts([...new Set(fetchedProducts)]);
    };

    if (Object.keys(cart).length) fetchProducts();
    else setProducts([]);
  }, [cart]);

  return (
    <>
      <CartItems products={products} />
      <CartSummary products={products} />
    </>
  );
}
