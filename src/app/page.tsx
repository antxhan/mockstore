import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import ProductsGrid from "@/components/ProductsGrid/ProductsGrid";
import { api } from "@/utils/api";
import { Suspense } from "react";

export default async function Home() {
  const products = await api.products({ limit: 4 });
  return (
    <Layout>
      <section className={styles.home__hero}>
        <div className={styles.home__heroImage}>
          <Image
            src="/images/hero.jpg"
            alt="Mock Store"
            width={1200}
            height={700}
            priority={true}
          />
        </div>
        <h1 className={styles.home__heroText}>
          <span>Mock Trends.</span>
          <span>Mock Prices.</span>
          <span>Mock Everything.</span>
        </h1>
        <Link href="/products" className={styles.home__heroButton}>
          <Image
            src="/icons/cart.svg"
            alt="Arrow right"
            width={24}
            height={24}
          />
          <span>Shop now</span>
        </Link>
      </section>

      <section className={styles.homeCategories}>
        <h2>Shop by Category</h2>
        <div className={styles.homeCategories__grid}>
          <CategoryCard category="Men's Clothing" />
          <CategoryCard category="Women's Clothing" />
          <CategoryCard category="Jewelery" />
          <CategoryCard category="Electronics" />
        </div>
      </section>

      <section className={styles.homeProducts}>
        <header>
          <h2>New Arrivals</h2>
          <Link href="/products">View All</Link>
        </header>
        <div className={styles.homeProducts__grid}>
          <Suspense fallback={<div>Loading products...</div>}>
            <ProductsGrid products={products} />
          </Suspense>
        </div>
      </section>
    </Layout>
  );
}
