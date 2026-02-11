import ProductsCard from "./ProductsCard";
import { Product } from "@/lib/types";

export default function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(min(240px,100%),1fr))] gap-6">
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
