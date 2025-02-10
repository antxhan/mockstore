"use client";

import { useDBContext } from "@/contexts/db";
import styles from "../styles.module.css";
import CartItem from "./CartItem/CartItem";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "@/utils/api";
import { Product } from "@/lib/types";

export default function CartItems() {
  const { cart } = useDBContext();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await Promise.all(
        Object.keys(cart).map((id) => api.product(parseInt(id)))
      );
      setProducts([...new Set(fetchedProducts)]);
    };

    if (Object.keys(cart).length) fetchProducts();
    else setProducts([]);
  }, [cart]);

  return (
    <section className={styles.cartItems}>
      <h2 className={styles.cartItems__title}>Your Cart</h2>
      <div className={styles.cartItems__items}>
        {products.length < 1 ? (
          <p className={styles.cartEmptyView}>
            No items in cart, go check out our{" "}
            <Link href="/products">Products</Link>
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
