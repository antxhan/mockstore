"use client";

import MainButton from "@/components/MainButton/MainButton";
import CartIcon from "@/icons/CartIcon";
import styles from "./styles.module.css";
import { useDBContext } from "@/contexts/db";
import { Product } from "@/lib/types";
import { db } from "@/utils/db";
import { sleep } from "@/utils/utils";
import { useRef, useState } from "react";
import HeartOutlineIcon from "@/icons/HeartOutlineIcon";
import CircleCheckIcon from "@/icons/CircleCheckIcon";

export default function AddToCartButton({
  productId,
  quantity,
}: {
  productId: Product["id"];
  quantity: number;
}) {
  const { setCart } = useDBContext();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [buttonIcon, setButtonIcon] = useState<React.ReactNode>(<CartIcon />);
  const [buttonText, setButtonText] = useState("Add to Cart");

  const handleAddToCart = async () => {
    // e.stopPropagation();
    // e.preventDefault();
    // const button = e.target as HTMLButtonElement;
    db.cart.add(productId, quantity);
    setCart(db.cart.get());

    // setTimeout(() => {
    //   e.currentTarget.classList.add(styles.add);
    // }, 1000);

    if (buttonRef.current) {
      buttonRef.current.classList.add(styles.add);
      setButtonIcon(<CircleCheckIcon />);
      setButtonText("Added to Cart");
      await sleep(1000);
      buttonRef.current.classList.remove(styles.add);
      setButtonIcon(<CartIcon />);
      setButtonText("Add to Cart");
    }
  };
  return (
    <MainButton
      icon={buttonIcon}
      title={buttonText}
      className={styles.addToCartButton}
      onClick={handleAddToCart}
      ref={buttonRef}
    />
  );
}
