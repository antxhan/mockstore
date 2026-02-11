"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const applyFilter = (name: string, value: string) => {
    router.replace(`?${createQueryString(name, value)}`);
  };

  const deleteFilter = (name: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete(name);
    router.replace(`?${params.toString()}`);
  };

  const resetFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("price");
    params.delete("category");
    router.replace(`?${params.toString()}`);
  };

  const countFilters = () => {
    return Array.from(searchParams.keys()).filter((param) => {
      return param === "category" || param === "price";
    }).length;
  };

  return {
    router,
    searchParams,
    applyFilter,
    deleteFilter,
    resetFilter,
    countFilters,
  };
}
