"use client";

import { useDBContext } from "@/contexts/db";
import ProductsGrid from "@/components/ProductsGrid/ProductsGrid";
import { Product } from "@/lib/types";
import { api } from "@/utils/api";
import { useEffect, useState } from "react";
import { shuffleCategories } from "@/utils/utils";

export default function LikedProducts() {
  const { likes } = useDBContext();
  const [products, setProducts] = useState<Product[]>([]);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

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

  useEffect(() => {
    if (products.length > 0) {
      const likedCategories = products.map((product) => product.category);
      const randomCategory = shuffleCategories(likedCategories)[0];
      api.category({ category: randomCategory, limit: 4 }).then((products) => {
        setRelatedProducts(
          products.filter((product) => !likes.includes(product.id))
        );
      });
    } else {
      setRelatedProducts([]);
    }
  }, [products, likes]);

  return (
    <>
      {products.length > 0 ? (
        <ProductsGrid products={products} />
      ) : (
        <div>No products liked yet</div>
      )}
      <div>related</div>
      {relatedProducts.length > 0 ? (
        <ProductsGrid products={relatedProducts} />
      ) : (
        <div>No related products</div>
      )}
    </>
  );
}
