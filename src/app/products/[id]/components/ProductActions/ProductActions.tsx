"use client";

import LikeButton from "@/components/LikeButton/LikeButton";
import styles from "../../styles.module.css";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import { Product } from "@/lib/types";
import Quantity from "@/components/Quantity/Quantity";
import { useState } from "react";

export default function ProductActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className={styles.product__quantity}>
        <h3>Quantity</h3>
        <Quantity
          quantity={quantity}
          setQuantity={setQuantity}
          disabled={quantity === 1}
        />
      </div>
      <div className={styles.product__actions}>
        <AddToCartButton productId={product.id} quantity={quantity} />
        <LikeButton
          productId={product.id}
          className={styles.product__likeButton}
        />
      </div>
    </>
  );
}
