"use client";

// import { useEffect, useState } from "react";
import HeaderAction from "./components/HeaderAction/HeaderAction";
import NavButton from "./components/MenuButton/NavButton";
import UserAvatar from "./components/HeaderAvatar/UserAvatar";
import styles from "./Nav.module.css";
import CartIcon from "@/icons/CartIcon";
import HeartOutlineIcon from "@/icons/HeartOutlineIcon";
import { useNavContext } from "./context";

export default function Nav() {
  const { isHidden, setIsHidden } = useNavContext();

  const handleNavButtonClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <NavButton onClick={handleNavButtonClick} />
      <nav className={styles.headerActions} data-expanded={!isHidden}>
        <HeaderAction path="/cart" icon={<CartIcon />} title="Cart" />
        <HeaderAction path="/likes" icon={<HeartOutlineIcon />} title="Likes" />
        <HeaderAction
          path="/products"
          icon="/icons/mensClothing.svg"
          title="Products"
        />
        <UserAvatar />
      </nav>
    </>
  );
}
