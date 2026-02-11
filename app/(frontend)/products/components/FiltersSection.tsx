"use client";

// import Link from "next/link";
import CategoriesFilter from "./CategoriesFilter";
import PriceFilter from "./PriceFilter";
import useFilter from "../../../../hooks/useFilter";

export default function FiltersSection() {
  const { resetFilter, countFilters } = useFilter();
  const filtersLength = countFilters();
  return (
    <aside className="relative">
      <div className="sticky top-4 flex flex-col gap-4">
        <div className="noselect flex flex-col gap-1 rounded-2xl bg-[var(--clr-neutral-200)] p-1">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2 text-[var(--fs-small)]">
              <h3>Filter</h3>
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--clr-primary)] px-2 text-[var(--fs-xsmall)] font-bold data-[visible=false]:hidden"
                data-visible={filtersLength > 0 ? true : false}
              >
                {filtersLength}
              </span>
            </div>
            <button
              className="border-none hover:underline"
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
