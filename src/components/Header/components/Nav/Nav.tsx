"use client";

import { useState } from "react";
import HeaderAction from "./components/HeaderAction/HeaderAction";
import NavButton from "./components/MenuButton/NavButton";
import UserAvatar from "./components/HeaderAvatar/UserAvatar";
import styles from "./Nav.module.css";

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const handleNavButtonClick = () => {
    setNavIsOpen(!navIsOpen);
  };
  return (
    <>
      <NavButton onClick={handleNavButtonClick} />
      <nav className={styles.headerActions} aria-hidden={navIsOpen}>
        <HeaderAction path="/cart" icon="icons/cart.svg" title="Cart" />
        <HeaderAction path="/likes" icon="icons/like.svg" title="Likes" />
        <UserAvatar />
        <HeaderAction
          path="/products"
          icon="icons/mensClothing.svg"
          title="Products"
        />
      </nav>
    </>
  );
}
