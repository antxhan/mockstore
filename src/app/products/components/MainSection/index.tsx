"use client";

import { useState } from "react";
import ViewToggle from "../ViewToggle";
import styles from "./styles.module.css";
import ProductsCard from "@/components/ProductsCard/ProductsCard";
import { Product } from "@/lib/types";
import SortBy from "../SortBy";
import NoProductsFound from "../NoProductsFound/NoProductsFound";
import Divider from "@/components/Divider/Divider";

export default function MainSection({ products }: { products: Product[] }) {
  const [view, setView] = useState("grid");
  return (
    <section className={styles.productsMain}>
      <div className={styles.productsMainHeader}>
        <ViewToggle view={view} setView={setView} />
        <SortBy />
      </div>
      <Divider />
      <div
        className={view === "grid" ? styles.productsGrid : styles.productsList}
      >
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductsCard
              product={product}
              key={product.id}
              view={view}
              index={index}
            />
          ))
        ) : (
          <NoProductsFound />
        )}
      </div>
    </section>
  );
}
