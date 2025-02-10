"use client";

import { useDBContext } from "@/contexts/db";
import ProductsGrid from "@/components/ProductsGrid/ProductsGrid";
import { Product } from "@/lib/types";
import { api } from "@/utils/api";
import { useEffect, useState } from "react";

export default function LikedProducts() {
  const { likes } = useDBContext();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await Promise.all(
        likes.map((id) => api.product(id))
      );
      setProducts([...new Set(fetchedProducts)]);
    };

    if (likes.length) fetchProducts();
    else setProducts([]);
  }, [likes]);

  return (
    <>
      {products.length > 0 ? (
        <ProductsGrid products={products} />
      ) : (
        <div>No products liked yet</div>
      )}
    </>
  );
}
