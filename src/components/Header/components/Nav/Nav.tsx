"use client";

import { useState } from "react";
import HeaderAction from "../HeaderAction";
import NavButton from "../NavButton";
import UserAvatar from "../UserAvatar";
import styles from "../../styles.module.css";

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
