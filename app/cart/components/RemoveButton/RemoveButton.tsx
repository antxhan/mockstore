"use client";

import XIcon from "@/icons/XIcon";
import styles from "./styles.module.css";
import { Product } from "@/lib/types";
import Button from "@/components/Button/Button";
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
      className={styles.removeButton}
    />
  );
}
