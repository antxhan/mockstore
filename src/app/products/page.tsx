import Layout from "@/components/Layout";
import ProductsCard from "@/components/ProductsCard/ProductsCard";
import { api } from "@/utils/api";
import styles from "./styles.module.css";
import Link from "next/link";
import PriceFilter from "./components/PriceFilter/PriceFilter";

export default async function Products() {
  const products = await api.products();
  return (
    <Layout>
      <header className={styles.productsHeader}>
        {/* {Breadcrumbs([
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/products",
      title: "Products",
    },
  ])} */}
      </header>
      <main className={styles.products}>
        <aside>
          <div>
            <h2>
              {products.length === 1
                ? `${products.length} result`
                : `${products.length} results`}
            </h2>
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
              <PriceFilter />
              {/* {CategoriesFilter()} */}
            </div>
          </div>
        </aside>
        <section>
          <section className={styles.productsMainHeader}>
            <select>
              <option>Sort by: Popular</option>
            </select>
          </section>
          <hr />
          <section>
            <div className={styles.productsGrid}>
              {products.map((product) => (
                <ProductsCard product={product} key={product.id} />
              ))}
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
}
