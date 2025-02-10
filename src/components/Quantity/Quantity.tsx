"use client";

import MinusIcon from "@/icons/MinusIcon";
import PlusIcon from "@/icons/PlusIcon";
import styles from "./styles.module.css";

export default function Quantity({
  quantity,
  setQuantity,
  plusOnClick,
  minusOnClick,
}: {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  plusOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  minusOnClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className={styles.quantityButtons}>
      <button
        {...(quantity === 1 ? { disabled: true } : {})}
        onClick={(e) => {
          e.preventDefault();
          if (minusOnClick) minusOnClick(e);
          setQuantity(quantity - 1);
        }}
      >
        <MinusIcon />
      </button>
      <span>{quantity}</span>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (plusOnClick) plusOnClick(e);
          setQuantity(quantity + 1);
        }}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
