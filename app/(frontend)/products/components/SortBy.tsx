import React from "react";
import useFilter from "../../../../hooks/useFilter";
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
    <div className="relative flex h-full items-center">
      <div className="pointer-events-none absolute left-3 z-[-1] flex items-center [&_svg]:mr-2 [&_svg]:h-5 [&_svg]:w-5 [&_svg]:text-[var(--clr-neutral-500)]">
        <FilterIcon />
        <label
          htmlFor="sort"
          className="text-nowrap text-[var(--clr-neutral-500)]"
        >
          Sort by:
        </label>
      </div>
      <select
        id="sort"
        onChange={onChange}
        defaultValue={searchParams.get("sort") || "relevance"}
        className="h-full max-w-[25ch] cursor-pointer appearance-none rounded-lg border border-[var(--clr-neutral-300)] bg-transparent pr-4 pl-[6.25rem] text-[var(--fs-normal)] transition-all duration-200 ease-in-out"
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
