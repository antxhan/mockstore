import React from "react";
import styles from "./styles.module.css";
import useFilter from "../../hooks/useFilter";
import FilterIcon from "@/icons/FilterIcon";

export default function SortBy() {
  const { searchParams, applyFilter, deleteFilter } = useFilter();
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "relevance") {
      deleteFilter("sort");
    } else {
      applyFilter("sort", e.target.value);
    }
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
        style={{
          width: `calc(${
            searchParams.get("sort")?.length || 10
          }ch + 6.5rem + 1ch)`,
        }}
      >
        <option value="relevance">Relevance</option>
        <option value="price-lowest">Price: Lowest</option>
        <option value="price-highest">Price: Highest</option>
      </select>
    </div>
  );
}
