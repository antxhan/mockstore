"use client";

import { useDBContext } from "@/contexts/db";
import ProductsGrid from "@/components/ProductsGrid/ProductsGrid";
import { Product } from "@/lib/types";
import { api } from "@/utils/api";
import { useEffect, useState } from "react";
import { shuffleCategories } from "@/utils/utils";
import styles from "../styles.module.css";
import Divider from "@/components/Divider/Divider";

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
      api.category({ category: randomCategory }).then((products) => {
        setRelatedProducts(
          products.filter((product) => !likes.includes(product.id)).slice(0, 4)
        );
      });
    } else {
      setRelatedProducts([]);
    }
  }, [products, likes]);

  return (
    <div className={styles.main}>
      {products.length > 0 ? (
        <ProductsGrid products={products} />
      ) : (
        <div>No products liked yet</div>
      )}
      {products.length > 0 && (
        <>
          <Divider />
          <h2 className={styles.relatedProducts__title}>
            You may also like...
          </h2>
          {relatedProducts.length > 0 ? (
            <ProductsGrid products={relatedProducts} />
          ) : (
            <div>No related products</div>
          )}
        </>
      )}
    </div>
  );
}
