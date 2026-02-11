import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import styles from "./styles.module.css";
import Cart from "./components/Cart";

export default function page() {
  const breadcrumbs = [
    { path: "/", title: "Home" },
    { path: "/cart", title: "Cart" },
  ];
  return (
    <>
      <header className={styles.header}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </header>
      <main className={styles.cart}>
        <Cart />
      </main>
    </>
  );
}
