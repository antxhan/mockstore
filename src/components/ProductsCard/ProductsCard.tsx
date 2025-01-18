import { Product } from "@/lib/types";
import { formatNumberWithSpaces } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function ProductsCard({ product }: { product: Product }) {
  return (
    <Link href={`/product?id=${product.id}`} className={styles.products__card}>
      <div className={styles.product__cardImage}>
        <Image
          src={product.image}
          alt={product.title}
          width={240}
          height={240}
        />
      </div>
      <h3>{product.title}</h3>
      <div className={styles.product__cardInfo}>
        <span>${formatNumberWithSpaces(product.price)}</span>
        {/* <button className="product__card--like-button">
          <Image
            src="${
          isLiked(product.id.toString()) ? heartFilledIcon : heartOutlineIcon
        }"
            alt="Like"
          />
        </button> */}
      </div>
    </Link>
  );
}
