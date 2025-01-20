"use client";
import { toCamelCase } from "@/utils/utils";
import FilterWrapper from "../FilterWrapper/FilterWrapper";
import { categoryIcon } from "@/icons/categoryIcons/categoryIcon";
import { useSearchParams } from "next/navigation";
import styles from "./styles.module.css";

export default function CategoriesFilter() {
  const categoryOptions = [
    {
      title: "Men's Clothing",
      icon: categoryIcon("mensClothing"),
    },
    {
      title: "Women's Clothing",
      icon: categoryIcon("womensClothing"),
    },
    {
      title: "Jewelery",
      icon: categoryIcon("jewelery"),
    },
    {
      title: "Electronics",
      icon: categoryIcon("electronics"),
    },
  ];
  const searchParams = useSearchParams();
  let categories = searchParams.get("category")?.split(",");
  if (!categories) {
    categories = [];
  }
  console.log(categories);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <FilterWrapper title="Categories">
      <ul className={styles.categoryFilter}>
        {categoryOptions.map((category) => {
          return (
            <li key={category.title}>
              <label
                className={styles.categoryFilterLiTitle}
                htmlFor={`filter-category-checkbox__${toCamelCase(
                  category.title
                )}`}
              >
                {category.icon}
                {category.title}
              </label>
              <input
                className={styles.categoryFilterLiCheckbox}
                name="category"
                id={`filter-category-checkbox__${toCamelCase(category.title)}`}
                type="checkbox"
                checked={categories.includes(category.title.toLowerCase())}
                value={category.title}
                onChange={handleChange}
              />
            </li>
          );
        })}
      </ul>
    </FilterWrapper>
  );
}
