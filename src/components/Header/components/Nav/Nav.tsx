"use client";

import { useState } from "react";
import HeaderAction from "./components/HeaderAction/HeaderAction";
import NavButton from "./components/MenuButton/NavButton";
import UserAvatar from "./components/HeaderAvatar/UserAvatar";
import styles from "./Nav.module.css";
import CartIcon from "@/icons/CartIcon";
import HeartOutlineIcon from "@/icons/HeartOutlineIcon";

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const handleNavButtonClick = () => {
    setNavIsOpen(!navIsOpen);
  };
  return (
    <>
      <NavButton onClick={handleNavButtonClick} />
      <nav className={styles.headerActions} aria-hidden={navIsOpen}>
        <HeaderAction path="/cart" icon={<CartIcon />} title="Cart" />
        <HeaderAction path="/likes" icon={<HeartOutlineIcon />} title="Likes" />
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
