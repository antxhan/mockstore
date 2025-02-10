import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Layout from "@/components/Layout";
import { api } from "@/utils/api";
import {
  formatNumberWithSpaces,
  toCamelCase,
  toCapitalize,
} from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { categoryIcon } from "@/icons/categoryIcons/categoryIcon";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";
import ProductActions from "./components/ProductActions/ProductActions";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const product = await api.product(parseInt(id));
  const relatedProducts = (
    await api.category({ category: product.category, limit: 4 })
  ).filter((item) => item.id !== product.id);
  const breadcrumbs = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/products",
      title: "Products",
    },
    {
      path: "/products/" + id,
      title: product.title,
    },
  ];

  return (
    <Layout>
      <header className={styles.header}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </header>
      <div className={styles.product}>
        <div className={styles.product__image}>
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={600}
            priority={true}
          />
        </div>
        <div className={styles.product__info}>
          <Link
            href={`/products?category=${product.category}`}
            className={styles.product__category}
          >
            {categoryIcon(toCamelCase(product.category))}
            {toCapitalize(product.category)}
          </Link>
          <h2>{product.title}</h2>
          <div className={styles.product__rating}>
            <div
              className={styles.product__ratingStars}
              style={{ width: `${(product.rating.rate / 5) * 100}%` }}
            >
              ★★★★★
            </div>
            <div className={styles.product__ratingCount}>
              {product.rating.count} reviews
            </div>
          </div>
          <span className={styles.product__price}>
            ${formatNumberWithSpaces(product.price)}
          </span>
          <p className={styles.product__description}>{product.description}</p>
          <ProductActions product={product} />
        </div>
      </div>
      <RelatedProducts relatedProducts={relatedProducts} />
    </Layout>
  );
}
