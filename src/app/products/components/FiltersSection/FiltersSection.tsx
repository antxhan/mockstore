"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import CategoriesFilter from "../CategoriesFilter";
import PriceFilter from "../PriceFilter/PriceFilter";
import { useSearchParams } from "next/navigation";

export default function FiltersSection() {
  const searchParams = useSearchParams();
  const filtersLength = Array.from(searchParams.entries()).filter((param) => {
    return param[0] === "category" || param[0] === "price";
  }).length;
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
            <Link href="/products" className={styles.productsFiltersClearAll}>
              Reset
            </Link>
          </div>
          <PriceFilter />
          <CategoriesFilter />
        </div>
      </div>
    </aside>
  );
}
