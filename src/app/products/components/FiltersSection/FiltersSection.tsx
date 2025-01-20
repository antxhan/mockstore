"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import CategoriesFilter from "../CategoriesFilter";
import PriceFilter from "../PriceFilter/PriceFilter";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

export default function FiltersSection() {
  const searchParams = useSearchParams();
  const searchParamsLength = Array.from(searchParams.entries()).length;
  return (
    <aside>
      <div>
        <div className={styles.productsFilters}>
          <div className={styles.productsFiltersHeader}>
            <div>
              <h3>Filter</h3>
              <span
                className={styles.filterCount}
                data-visible={searchParamsLength > 0 ? true : false}
              >
                {searchParamsLength}
              </span>
            </div>
            <Link href="/products" className={styles.productsFiltersClearAll}>
              Reset
            </Link>
          </div>
          <Suspense fallback={<div>Loading price filter...</div>}>
            <PriceFilter />
          </Suspense>
          <Suspense fallback={<div>Loading categories filter...</div>}>
            <CategoriesFilter />
          </Suspense>
        </div>
      </div>
    </aside>
  );
}
