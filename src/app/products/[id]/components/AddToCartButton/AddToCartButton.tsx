"use client";

import MainButton from "@/components/MainButton/MainButton";
import CartIcon from "@/icons/CartIcon";
import styles from "./styles.module.css";
import { useDBContext } from "@/contexts/db";
import { Product } from "@/lib/types";
import { db } from "@/utils/db";

export default function AddToCartButton({
  productId,
  quantity,
}: {
  productId: Product["id"];
  quantity: number;
}) {
  const { setCart } = useDBContext();
  const handleAddToCart = () => {
    db.cart.add(productId, quantity);
    setCart(db.cart.get());
  };
  return (
    <MainButton
      icon={<CartIcon />}
      title="Add to Cart"
      className={styles.addToCartButton}
      onClick={handleAddToCart}
    />
  );
}
