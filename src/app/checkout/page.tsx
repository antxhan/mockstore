import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
// import Layout from "@/components/Layout";
import styles from "./styles.module.css";
import CheckoutSummary from "./components/CheckoutSummary/CheckoutSummary";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";

export default function page() {
  const breadcrumbs = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/checkout",
      title: "Checkout",
    },
  ];
  return (
    <>
      <header className={styles.header}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </header>
      <main className={styles.checkout}>
        <CheckoutForm />
        <CheckoutSummary />
      </main>
    </>
  );
}
