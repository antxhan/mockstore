"use client";

import { useState } from "react";
import ViewToggle from "../ViewToggle";
import styles from "../../styles.module.css";
import ProductsCard from "@/components/ProductsCard/ProductsCard";
import { Product } from "@/lib/types";

export default function MainSection({ products }: { products: Product[] }) {
  const [view, setView] = useState("grid");
  return (
    <section className={styles.productsMain}>
      <section className={styles.productsMainHeader}>
        <ViewToggle view={view} setView={setView} />
        <select>
          <option>Sort by: Popular</option>
        </select>
      </section>
      <hr className={styles.divider} />
      <div
        className={view === "grid" ? styles.productsGrid : styles.productsList}
      >
        {products.map((product) => (
          <ProductsCard product={product} key={product.id} view={view} />
        ))}
      </div>
    </section>
  );
}
