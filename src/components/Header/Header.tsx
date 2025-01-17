"use client";

import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar/SearchBar";
import NavButton from "./components/NavButton";
import HeaderAction from "./components/HeaderAction";
import Categories from "./components/Categories";
import UserAvatar from "./components/UserAvatar";
import styles from "./styles.module.css";
import { Suspense, useState } from "react";

export default function Header() {
  const [userIsOpen, setUserIsOpen] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const handleNavButtonClick = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />

        <Suspense fallback={<div>Loading search parameters...</div>}>
          <SearchBar />
        </Suspense>
        <NavButton onClick={handleNavButtonClick} />
        <nav className={styles.headerActions} aria-hidden={navIsOpen}>
          <HeaderAction path="/cart" icon="icons/cart.svg" title="Cart" />
          <HeaderAction path="/likes" icon="icons/like.svg" title="Likes" />
          <HeaderAction
            path="/products"
            icon="icons/mensClothing.svg"
            title="Products"
          />
          <UserAvatar userIsOpen={userIsOpen} setUserIsOpen={setUserIsOpen} />
        </nav>
        <Categories />
      </div>
    </header>
  );
}
