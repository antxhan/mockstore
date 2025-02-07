import Link from "next/link";
import styles from "./Categories.module.css";

export default function Categories() {
  const categories = [
    { path: "/products?category=men's clothing", title: "Men's Clothing" },
    { path: "/products?category=women's clothing", title: "Women's Clothing" },
    { path: "/products?category=jewelery", title: "Jewelery" },
    { path: "/products?category=electronics", title: "Electronics" },
    { path: "/products", title: "All" },
  ];
  return (
    <ul className={styles.headerCategories}>
      {categories.map((category) => (
        <li key={category.title}>
          <Link href={category.path}>{category.title}</Link>
        </li>
      ))}
    </ul>
  );
}
