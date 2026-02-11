import ProductsCard from "../ProductsCard/ProductsCard";
import { Product } from "@/lib/types";
import styles from "./styles.module.css";

export default function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className={styles.productsGrid}>
      {products.map((product, index) => (
        <ProductsCard
          key={product.id}
          product={product}
          index={index}
          view="grid"
        />
      ))}
    </div>
  );
}
