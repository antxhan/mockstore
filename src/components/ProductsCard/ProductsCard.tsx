import { Product } from "@/lib/types";
import { formatNumberWithSpaces } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function ProductsCard({
  product,
  view,
}: {
  product: Product;
  view: string;
}) {
  return (
    <Link
      href={`/product?id=${product.id}`}
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
        />
      </div>
      <div className={styles.product__cardInfo}>
        <h3>{product.title}</h3>
        {/* <div> */}
        <span>${formatNumberWithSpaces(product.price)}</span>
        <button className={styles.product__cardLikeButton}>
          <Image
            // isLiked(product.id)
            src={false ? "/icons/unlike.svg" : "/icons/like.svg"}
            alt="Like"
            width={24}
            height={24}
          />
        </button>
        {/* </div> */}
      </div>
    </Link>
  );
}
