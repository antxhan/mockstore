"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import useFilter from "@/app/products/hooks/useFilter";
import { useEffect, useState } from "react";
// import searchIcon from "../../../../icons/search.svg";

export default function SearchBar() {
  const { searchParams, router } = useFilter();

  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("running");
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
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <Image
        src={"../icons/search.svg"}
        alt="Search icon"
        width={24}
        height={24}
        draggable={false}
      />
      <input
        type="text"
        placeholder="Search"
        name="q"
        // defaultValue={searchParams?.get("q") || ""}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
