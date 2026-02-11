"use client";

import MinusIcon from "@/icons/MinusIcon";
import PlusIcon from "@/icons/PlusIcon";
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
    <div className="grid grid-cols-[max-content_3rem_max-content] items-center">
      <Button
        icon={<MinusIcon />}
        ariaLabel="Decrement"
        disabled={disabled}
        className="!flex !h-[2.345rem] !w-[2.345rem] items-center justify-center !rounded-2xl !bg-[var(--clr-neutral-200)] hover:!bg-[var(--clr-neutral-100)] disabled:!bg-[var(--clr-neutral-100)]"
        onClick={(e) => {
          e.preventDefault();
          if (minusOnClick) minusOnClick(e);
          setQuantity(quantity - 1);
        }}
      />
      <span className="text-center">{quantity}</span>
      <Button
        icon={<PlusIcon />}
        ariaLabel="Increment"
        className="!flex !h-[2.345rem] !w-[2.345rem] items-center justify-center !rounded-2xl !bg-[var(--clr-neutral-200)] hover:!bg-[var(--clr-neutral-100)] disabled:!bg-[var(--clr-neutral-100)]"
        onClick={(e) => {
          e.preventDefault();
          if (plusOnClick) plusOnClick(e);
          setQuantity(quantity + 1);
        }}
      />
    </div>
  );
}
