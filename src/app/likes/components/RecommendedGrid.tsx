import ProductsGrid from "@/components/ProductsGrid/ProductsGrid";
import { Product } from "@/lib/types";

export default function RecommendedGrid({ products }: { products: Product[] }) {
  return <ProductsGrid products={products} />;
}
