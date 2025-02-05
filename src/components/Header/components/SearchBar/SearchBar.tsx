"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import useFilter from "@/app/products/hooks/useFilter";

export default function SearchBar() {
  const { searchParams, router } = useFilter();

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
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <Image
        src="icons/search.svg"
        alt="Search icon"
        width={24}
        height={24}
        draggable={false}
      />
      <input
        type="text"
        placeholder="Search"
        name="q"
        defaultValue={searchParams?.get("q") || ""}
      />
    </form>
  );
}
