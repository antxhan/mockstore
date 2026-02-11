import ProductsGrid from "@/components/ProductsGrid/ProductsGrid";
import { Product } from "@/lib/types";
import styles from "./styles.module.css";

export default function RelatedProducts({
  relatedProducts,
}: {
  relatedProducts: Product[];
}) {
  return (
    <div className={styles.relatedProducts}>
      <h2>Related Products</h2>
      <ProductsGrid products={relatedProducts} />
    </div>
  );
}
