import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      M<span>ock</span>S<span>tore</span>
    </Link>
  );
}
