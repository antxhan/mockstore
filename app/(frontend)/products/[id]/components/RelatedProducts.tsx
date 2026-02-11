import ProductsGrid from "@/components/ProductsGrid";
import { Product } from "@/lib/types";

export default function RelatedProducts({
  relatedProducts,
}: {
  relatedProducts: Product[];
}) {
  return (
    <div className="col-span-2 mt-8 flex flex-col gap-8 max-[700px]:col-span-1">
      <h2>Related Products</h2>
      <ProductsGrid products={relatedProducts} />
    </div>
  );
}
