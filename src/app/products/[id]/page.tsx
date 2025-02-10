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
import MinusIcon from "@/icons/MinusIcon";
import PlusIcon from "@/icons/PlusIcon";
import MainButton from "@/components/MainButton/MainButton";
import CartIcon from "@/icons/CartIcon";
import LikeButton from "@/components/LikeButton/LikeButton";
import ProductsGrid from "@/components/ProductsGrid/ProductsGrid";

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
          <div className={styles.product__quantity}>
            <h3>Quantity</h3>
            <div className={styles.product__quantityButtons}>
              <button value="-" disabled>
                <MinusIcon />
              </button>
              <span>1</span>
              <button value="+">
                <PlusIcon />
              </button>
            </div>
          </div>
          <div className={styles.product__actions}>
            <MainButton
              icon={<CartIcon />}
              title="Add to Cart"
              className={styles.product__addToCartButton}
            />

            <LikeButton
              productId={product.id}
              className={styles.product__likeButton}
            />
          </div>
        </div>
      </div>
      <div className={styles.relatedProducts}>
        <h2>Related Products</h2>
        <ProductsGrid products={relatedProducts} />
      </div>
    </Layout>
  );
}
