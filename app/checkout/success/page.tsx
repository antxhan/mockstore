import Link from "next/link";
import styles from "./styles.module.css";
import CircleCheckIcon from "@/icons/CircleCheckIcon";

export default function page() {
  return (
    <div className={styles.success}>
      <CircleCheckIcon />
      <h1>Complete!</h1>
      <p>Your order has been placed.</p>
      <p>
        You can now return to the <Link href="/">Home</Link> page.
      </p>
    </div>
  );
}
