"use client";

import { formatNumberWithSpaces, sumTotal } from "@/utils/utils";
import styles from "./styles.module.css";
import { CartItem } from "@/lib/types";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
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
        })
      );
      setItems([...new Set(fetchedProducts)]);
    };

    if (Object.keys(cart).length) fetchProducts();
    else setItems([]);
  }, [cart]);

  return (
    <section className={styles.checkout__total} data-expanded="true">
      <main>
        <h2>Total</h2>
        <div className={styles.checkout__totalItems}>
          <div className={styles.checkout__totalItemsHeader}>
            <h3>Cart</h3>
            <span>
              {formatNumberWithSpaces(
                items.reduce((acc, item) => acc + +item.quantity, 0)
              )}{" "}
              items
            </span>
          </div>
          <div className={styles.checkout__totalItemsList}>
            {items.map((item) => (
              <CheckoutItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className={styles.checkout__totalPrice}>
          <h3>Subtotal</h3>
          <span>${formatNumberWithSpaces(sumTotal(items))}</span>
        </div>
      </main>
    </section>
  );
}
