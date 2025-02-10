"use client";

import HeaderAction from "./components/HeaderAction/HeaderAction";
import NavButton from "./components/MenuButton/NavButton";
import UserAvatar from "./components/HeaderAvatar/UserAvatar";
import styles from "./Nav.module.css";
import CartIcon from "@/icons/CartIcon";
import HeartOutlineIcon from "@/icons/HeartOutlineIcon";
import { useNavContext } from "./context";
import { useDBContext } from "@/contexts/db";

export default function Nav() {
  const { isHidden, setIsHidden } = useNavContext();
  const { cart, likes } = useDBContext();

  const cartCount = Object.values(cart).reduce((acc, val) => acc + val, 0);

  const handleNavButtonClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <NavButton onClick={handleNavButtonClick} />
      <nav className={styles.headerActions} data-expanded={!isHidden}>
        <HeaderAction
          path="/cart"
          icon={<CartIcon />}
          title="Cart"
          count={cartCount}
        />
        <HeaderAction
          path="/likes"
          icon={<HeartOutlineIcon />}
          title="Likes"
          count={likes.length}
        />
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
