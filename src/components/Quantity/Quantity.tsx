"use client";

import MinusIcon from "@/icons/MinusIcon";
import PlusIcon from "@/icons/PlusIcon";
import styles from "./styles.module.css";
import Button from "../Button/Button";

export default function Quantity({
  quantity,
  setQuantity,
  plusOnClick,
  minusOnClick,
  disabled,
}: {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  plusOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  minusOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}) {
  return (
    <div className={styles.quantity}>
      <Button
        icon={<MinusIcon />}
        ariaLabel="Decrement"
        disabled={disabled}
        onClick={(e) => {
          e.preventDefault();
          if (minusOnClick) minusOnClick(e);
          setQuantity(quantity - 1);
        }}
      />
      <span>{quantity}</span>
      <Button
        icon={<PlusIcon />}
        ariaLabel="Increment"
        onClick={(e) => {
          e.preventDefault();
          if (plusOnClick) plusOnClick(e);
          setQuantity(quantity + 1);
        }}
      />
    </div>
  );
}
