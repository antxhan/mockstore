"use client";

import { useState } from "react";
import ViewToggle from "./ViewToggle";
import ProductsCard from "@/components/ProductsCard";
import { Product } from "@/lib/types";
import SortBy from "./SortBy";
import NoProductsFound from "./NoProductsFound";
import Divider from "@/components/Divider";

export default function MainSection({ products }: { products: Product[] }) {
  const [view, setView] = useState("grid");
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <ViewToggle view={view} setView={setView} />
        <SortBy />
      </div>
      <Divider />
      <div
        className={
          view === "grid"
            ? "grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6"
            : "flex flex-col gap-4"
        }
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
