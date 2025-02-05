"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const applyFilter = (name: string, value: string) => {
    router.push(`?${createQueryString(name, value)}`);
  };

  const deleteFilter = (name: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(name);
    router.push(`?${params.toString()}`);
  };

  return {
    searchParams,
    applyFilter,
    deleteFilter,
  };
}
