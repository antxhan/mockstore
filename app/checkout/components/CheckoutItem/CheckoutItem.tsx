import Image from "next/image";
import styles from "./styles.module.css";
import { formatNumberWithSpaces } from "@/utils/utils";
import { CartItem } from "@/lib/types";

export default function CheckoutItem({ item }: { item: CartItem }) {
  return (
    <div className={styles.checkout__totalItem}>
      <div className={styles.checkout__totalItemImage}>
        <Image src={item.image} alt={item.title} width={100} height={100} />
      </div>
      <div className={styles.checkout__totalItemInfo}>
        <span>{item.title}</span>
        <span>${formatNumberWithSpaces(item.price)}</span>
        <span>Qty: {formatNumberWithSpaces(item.quantity)}</span>
      </div>
    </div>
  );
}
