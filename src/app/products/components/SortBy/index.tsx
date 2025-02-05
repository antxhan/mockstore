import React from "react";
import styles from "./styles.module.css";
import useFilter from "../../hooks/useFilter";
import FilterIcon from "@/icons/FilterIcon";

export default function SortBy() {
  const { searchParams, applyFilter } = useFilter();
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    applyFilter("sort", e.target.value);
  };
  return (
    <div className={styles.sort}>
      <div>
        <FilterIcon />
        <span>Sort by:</span>
      </div>
      <select
        onChange={onChange}
        defaultValue={searchParams.get("sort") || "relevance"}
      >
        <option value="relevance">Relevance</option>
        <option value="price-lowest">Price: Lowest</option>
        <option value="price-highest">Price: Highest</option>
      </select>
    </div>
  );
}
