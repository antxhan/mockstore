import { api } from "@/utils/api";
import styles from "./styles.module.css";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import MainSection from "./components/MainSection";
import FiltersSection from "./components/FiltersSection/FiltersSection";
import { Suspense } from "react";

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const filters = await searchParams;
  const products = await api.products({ filters });
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
    <>
      <header className={styles.productsHeader}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <h2>
          {products.length === 1
            ? `${products.length} result`
            : `${products.length} results`}
        </h2>
      </header>
      <main className={styles.products}>
        <Suspense fallback={<div>Loading products...</div>}>
          <FiltersSection />
        </Suspense>
        <MainSection products={products} />
      </main>
    </>
  );
}
