"use client";

import styles from "../styles.module.css";
import CartItem from "./CartItem/CartItem";
import Link from "next/link";
import { CartItem as CartItemType } from "@/lib/types";

export default function CartItems({ products }: { products: CartItemType[] }) {
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
