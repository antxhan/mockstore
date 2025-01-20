import Layout from "@/components/Layout";
import { api } from "@/utils/api";
import styles from "./styles.module.css";
import Link from "next/link";
import PriceFilter from "./components/PriceFilter/PriceFilter";
import CategoriesFilter from "./components/CategoriesFilter";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import MainSection from "./components/MainSection";
import { Suspense } from "react";

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
        <aside>
          <div>
            <div className={styles.productsFilters}>
              <div className={styles.productsFiltersHeader}>
                <h3>Filter</h3>
                <Link
                  href="/products"
                  className={styles.productsFiltersClearAll}
                >
                  Reset
                </Link>
              </div>
              <Suspense fallback={<div>Loading price filter...</div>}>
                <PriceFilter />
              </Suspense>
              <Suspense fallback={<div>Loading categories filter...</div>}>
                <CategoriesFilter />
              </Suspense>
            </div>
          </div>
        </aside>
        <MainSection products={products} />
      </main>
    </Layout>
  );
}
