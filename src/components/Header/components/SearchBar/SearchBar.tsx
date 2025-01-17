import Image from "next/image";
import styles from "./styles.module.css";
import { useSearchParams } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  return (
    <form className={styles.searchBar} action="/products">
      <Image src="icons/search.svg" alt="Search icon" width={24} height={24} />
      <input
        type="text"
        placeholder="Search"
        name="q"
        defaultValue={searchParams?.get("q") || ""}
      />
    </form>
  );
}
