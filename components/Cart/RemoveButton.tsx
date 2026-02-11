"use client";

import XIcon from "@/icons/XIcon";
import { Product } from "@/lib/types";
import Button from "@/components/Button";
import { db } from "@/utils/db";
import { useDBContext } from "@/contexts/db";

export default function RemoveButton({
  productId,
}: {
  productId: Product["id"];
}) {
  const { setCart } = useDBContext();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    db.cart.delete(productId);
    setCart(db.cart.get());
  };
  return (
    <Button
      icon={<XIcon />}
      onClick={handleClick}
      ariaLabel="Remove"
      className="!flex !h-7 !w-7 !min-h-7 !min-w-7 items-center justify-center !rounded-2xl !bg-neutral-200 hover:!bg-neutral-100 [&_svg]:h-5 [&_svg]:w-5"
    />
  );
}
