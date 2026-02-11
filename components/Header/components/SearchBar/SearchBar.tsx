"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import useFilter from "@/app/(frontend)/products/hooks/useFilter";

export default function SearchBar() {
  const { searchParams, router } = useFilter();

  const [search, setSearch] = useState("");

  useEffect(() => {
    const q = searchParams.get("q") || "";
    setSearch(q);
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get("q")?.toString().trim();
    if (q) {
      router.push(`/products?q=${q}`);
    } else {
      router.push("/products");
    }
  };

  return (
    <form
      className="relative flex w-[min(100%,20rem)] justify-self-center max-[700px]:w-full"
      onSubmit={handleSearch}
    >
      <Image
        src={"/icons/search.svg"}
        alt="Search icon"
        width={24}
        height={24}
        draggable={false}
        className="pointer-events-none absolute top-1/2 left-3 h-6 w-6 -translate-y-1/2 opacity-50"
      />
      <input
        type="text"
        placeholder="Search"
        name="q"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-lg border-none bg-[var(--clr-neutral-200)] px-5 py-3 pl-11 text-[var(--fs-normal)] outline-[var(--clr-primary)]"
      />
    </form>
  );
}
