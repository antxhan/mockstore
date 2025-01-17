import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar/SearchBar";
import Categories from "./components/Categories";
import styles from "./styles.module.css";
import { Suspense } from "react";
import Nav from "./components/Nav/Nav";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <Suspense fallback={<div>Loading search parameters...</div>}>
          <SearchBar />
        </Suspense>
        <Nav />
        <Categories />
      </div>
    </header>
  );
}
