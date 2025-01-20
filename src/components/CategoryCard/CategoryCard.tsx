import { categoryIcon } from "@/icons/categoryIcons/categoryIcon";
import { toCamelCase } from "../../utils/utils";
import styles from "./styles.module.css";
import Link from "next/link";

export default function CategoryCard({ category }: { category: string }) {
  return (
    <Link
      href={`/products?category=${category.toLowerCase()}`}
      className={styles.categoryCard}
    >
      {categoryIcon(toCamelCase(category))}
      <span>{category}</span>
    </Link>
  );
}
