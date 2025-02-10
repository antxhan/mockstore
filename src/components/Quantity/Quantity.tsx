"use client";

import MinusIcon from "@/icons/MinusIcon";
import PlusIcon from "@/icons/PlusIcon";
import styles from "./styles.module.css";
// import { useState } from "react";

export default function Quantity({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}) {
  //   const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.quantityButtons}>
      <button
        {...(quantity === 1 ? { disabled: true } : {})}
        onClick={(e) => {
          e.preventDefault();
          setQuantity(quantity - 1);
        }}
      >
        <MinusIcon />
      </button>
      <span>{quantity}</span>
      <button
        onClick={(e) => {
          e.preventDefault();
          setQuantity(quantity + 1);
        }}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
