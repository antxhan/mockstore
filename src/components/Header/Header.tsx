import Logo from "./components/Logo/Logo";
import SearchBar from "./components/SearchBar/SearchBar";
import Categories from "./components/Categories/Categories";
import styles from "./styles.module.css";
import { Suspense } from "react";
import Nav from "./components/Nav/Nav";
import NavContextProvider from "./components/Nav/context";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <Suspense fallback={<div>Loading search parameters...</div>}>
          <SearchBar />
        </Suspense>
        <NavContextProvider>
          <Nav />
        </NavContextProvider>
        <Categories />
      </div>
    </header>
  );
}
