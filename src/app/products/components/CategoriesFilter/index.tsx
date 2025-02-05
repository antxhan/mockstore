"use client";
import { toCamelCase } from "@/utils/utils";
import FilterWrapper from "../FilterWrapper/FilterWrapper";
import { categoryIcon } from "@/icons/categoryIcons/categoryIcon";
import styles from "./styles.module.css";
import useFilter from "../../hooks/useFilter";
import { useEffect, useState } from "react";

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

  const { searchParams, applyFilter, deleteFilter } = useFilter();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    const categories = searchParams.get("category")?.split(",") || [];
    setSelectedCategories(categories);
  }, [searchParams]);

  const categories = searchParams.get("category")?.split(",") || [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const toggledCategory = e.target;
    if (categories.includes(toggledCategory.value)) {
      const index = categories.indexOf(toggledCategory.value);
      categories.splice(index, 1);
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((c) => c !== toggledCategory.value)
      );
      if (categories.length === 0) {
        deleteFilter("category");
        return;
      }
    } else {
      categories.push(toggledCategory.value);
      setSelectedCategories((prevCategories) => [
        ...prevCategories,
        toggledCategory.value,
      ]);
    }
    applyFilter("category", categories.join(","));
  };

  return (
    <FilterWrapper
      title="Categories"
      indicator={categories.length > 0 ? categories.length.toString() : null}
    >
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
                checked={selectedCategories.includes(
                  category.title.toLowerCase()
                )}
                value={category.title.toLowerCase()}
                onChange={handleChange}
              />
            </li>
          );
        })}
      </ul>
    </FilterWrapper>
  );
}
