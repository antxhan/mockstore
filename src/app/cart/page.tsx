import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Layout from "@/components/Layout";
import styles from "./styles.module.css";
// import CartItems from "./components/CartItems";
// import CartSummary from "./components/CartSummary/CartSummary";
import Cart from "./components/Cart";

export default function page() {
  const breadcrumbs = [
    { path: "/", title: "Home" },
    { path: "/cart", title: "Cart" },
  ];
  return (
    <Layout>
      <header className={styles.header}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </header>
      <main className={styles.cart}>
        <Cart />
      </main>
    </Layout>
  );
}
