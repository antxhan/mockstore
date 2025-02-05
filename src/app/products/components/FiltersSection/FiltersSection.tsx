"use client";

// import Link from "next/link";
import styles from "./styles.module.css";
import CategoriesFilter from "../CategoriesFilter";
import PriceFilter from "../PriceFilter/PriceFilter";
import useFilter from "../../hooks/useFilter";

export default function FiltersSection() {
  const { resetFilter, countFilters } = useFilter();
  const filtersLength = countFilters();
  return (
    <aside>
      <div>
        <div className={styles.productsFilters + " noselect"}>
          <div className={styles.productsFiltersHeader}>
            <div>
              <h3>Filter</h3>
              <span
                className={styles.filterCount}
                data-visible={filtersLength > 0 ? true : false}
              >
                {filtersLength}
              </span>
            </div>
            <button
              className={styles.productsFiltersClearAll}
              onClick={resetFilter}
            >
              Reset
            </button>
          </div>
          <PriceFilter />
          <CategoriesFilter />
        </div>
      </div>
    </aside>
  );
}
