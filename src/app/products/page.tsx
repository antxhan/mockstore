import Layout from "@/components/Layout";
import { api } from "@/utils/api";
import styles from "./styles.module.css";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import MainSection from "./components/MainSection";
import FiltersSection from "./components/FiltersSection/FiltersSection";

export default async function Products() {
  const products = await api.products();
  const breadcrumbs = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/products",
      title: "Products",
    },
  ];
  return (
    <Layout>
      <header className={styles.productsHeader}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <h2>
          {products.length === 1
            ? `${products.length} result`
            : `${products.length} results`}
        </h2>
      </header>
      <main className={styles.products}>
        <FiltersSection />
        <MainSection products={products} />
      </main>
    </Layout>
  );
}
