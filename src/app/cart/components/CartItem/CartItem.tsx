"use client";

import Quantity from "@/components/Quantity/Quantity";
import XIcon from "@/icons/XIcon";
import { Product } from "@/lib/types";
import { formatNumberWithSpaces } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./CartItem.module.css";
import { useDBContext } from "@/contexts/db";
import { db } from "@/utils/db";

export default function CartItem({ product }: { product: Product }) {
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
    <Link href={`/products/${product.id}`} className={styles.cartItem}>
      <Image
        src={product.image}
        alt={product.title}
        className={styles.cartItem__image}
        width={125}
        height={125}
        priority={true}
      />
      <div className={styles.cartItem__info}>
        <div className={styles.cartItem__topRow}>
          <h3>{product.title}</h3>
          <button className={styles.cartItem__remove}>
            <XIcon />
          </button>
        </div>
        <span className={styles.cartItem__price}>
          ${formatNumberWithSpaces(product.price)}
        </span>
        <Quantity
          quantity={quantity}
          setQuantity={setQuantity}
          plusOnClick={plusOnClick}
          minusOnClick={minusOnClick}
        />
      </div>
    </Link>
  );
}
