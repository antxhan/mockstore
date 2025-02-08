import { Product } from "@/lib/types";
import { formatNumberWithSpaces } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import LikeButton from "../LikeButton/LikeButton";

export default function ProductsCard({
  product,
  view,
  index,
}: {
  product: Product;
  view: string;
  index: number;
}) {
  return (
    <Link
      href={`/products/${product.id}`}
      className={
        view === "grid" ? styles.products__card : styles.products__listItem
      }
    >
      <div className={styles.product__cardImage}>
        <Image
          src={product.image}
          alt={product.title}
          width={240}
          height={240}
          priority={index <= 6}
        />
      </div>
      <div className={styles.product__cardInfo}>
        <h3>{product.title}</h3>
        <span>${formatNumberWithSpaces(product.price)}</span>
        <LikeButton isLiked={false} productId={product.id} />
      </div>
    </Link>
  );
}
