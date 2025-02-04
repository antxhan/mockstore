import React from "react";
import styles from "./styles.module.css";
import useFilter from "../../hooks/useFilter";

export default function SortBy() {
  const { searchParams, applyFilter } = useFilter();
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    applyFilter("sort", e.target.value);
  };
  return (
    <div className={styles.sort}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" />
        </svg>
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
