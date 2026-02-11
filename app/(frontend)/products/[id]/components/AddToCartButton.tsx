"use client";

import MainButton from "@/components/MainButton";
import CartIcon from "@/icons/CartIcon";
import { useDBContext } from "@/contexts/db";
import { Product } from "@/lib/types";
import { db } from "@/utils/db";
import { sleep } from "@/utils/utils";
import { useState } from "react";
import CircleCheckIcon from "@/icons/CircleCheckIcon";

export default function AddToCartButton({
  productId,
  quantity,
}: {
  productId: Product["id"];
  quantity: number;
}) {
  const { setCart } = useDBContext();
  const [added, setAdded] = useState(false);
  const [buttonIcon, setButtonIcon] = useState<React.ReactNode>(<CartIcon />);
  const [buttonText, setButtonText] = useState("Add to Cart");

  const handleAddToCart = async () => {
    db.cart.add(productId, quantity);
    setCart(db.cart.get());
    setAdded(true);
    setButtonIcon(<CircleCheckIcon />);
    setButtonText("Added to Cart");
    await sleep(1000);
    setAdded(false);
    setButtonIcon(<CartIcon />);
    setButtonText("Add to Cart");
  };
  return (
    <MainButton
      icon={buttonIcon}
      title={buttonText}
      className={
        added
          ? "bg-[rgb(20,109,20)] border-[rgb(20,109,20)] hover:bg-[rgb(20,109,20)]"
          : ""
      }
      onClick={handleAddToCart}
    />
  );
}
