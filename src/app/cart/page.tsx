import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Layout from "@/components/Layout";
// import { formatNumberWithSpaces } from "@/utils/utils";
import styles from "./styles.module.css";
import CartItems from "./components/CartItems";

export default function Cart() {
  const breadcrumbs = [
    { path: "/", title: "Home" },
    { path: "/cart", title: "Cart" },
  ];
  return (
    <Layout>
      <header>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </header>
      <main className={styles.cart}>
        <CartItems />
        <aside className={styles.cartSummary}>
          <h2>Total</h2>
          <div className={styles.cartSubtotal}>
            <h3>Subtotal</h3>
            {/* <span>${formatNumberWithSpaces(sumTotal(products))}</span> */}
          </div>
          {/* <a href="/checkout" className="checkout-button main-button ${
          products.length < 1 ? "disabled" : ""
        }">
          ${checkoutIcon}
          <span>Checkout</span>
        </a> */}
        </aside>
      </main>
    </Layout>
  );
}
