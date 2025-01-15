import Image from "next/image";
import styles from "../styles.module.css";

export default function SearchBar() {
  return (
    <form className={styles.searchBar} action="/products">
      <Image src="icons/search.svg" alt="Search icon" width={24} height={24} />
      <input type="text" placeholder="Search" name="q" />
    </form>
  );
}
