import { formatNumberWithSpaces, sumTotal } from "@/utils/utils";
import styles from "./styles.module.css";
import { CartItem } from "@/lib/types";
import Link from "next/link";
import mainButtonStyles from "@/components/MainButton/MainButton.module.css";
import CheckoutIcon from "@/icons/CheckoutIcon";

export default function CartSummary({ products }: { products: CartItem[] }) {
  return (
    <aside className={styles.cartSummary}>
      <h2>Total</h2>
      <div className={styles.cartSubtotal}>
        <h3>Subtotal</h3>
        <span>${formatNumberWithSpaces(sumTotal(products))}</span>
      </div>
      <Link
        href="/checkout"
        className={`${styles.checkoutButton} ${mainButtonStyles.mainButton} ${
          products.length < 1 && styles.disabled
        }`}
      >
        <CheckoutIcon />
        <span>Checkout</span>
      </Link>
    </aside>
  );
}
