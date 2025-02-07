import Image from "next/image";
// import UserMenu from "./UserMenu";
import AccountMenu from "../AccountMenu/UserMenu";
import styles from "./HeaderAvatar.module.css";
import headerActionStyles from "../HeaderAction/HeaderAction.module.css";
import { useEffect, useRef, useState } from "react";

export default function UserAvatar() {
  const [userIsOpen, setUserIsOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null!);
  const userButtonRef = useRef<HTMLButtonElement | null>(null);
  const handleClick = () => {
    setUserIsOpen(!userIsOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(e.target as Node) &&
        userButtonRef.current &&
        !userButtonRef.current.contains(e.target as Node)
      ) {
        setUserIsOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [userIsOpen, setUserIsOpen]);

  return (
    <div
      className={`${headerActionStyles.headerAction} ${styles.headerAvatar}`}
    >
      <button onClick={handleClick} ref={userButtonRef}>
        <Image
          src="/icons/user.svg"
          alt="Account Icon"
          width={24}
          height={24}
        />
        <span className={headerActionStyles.headerActionsLabel}>Account</span>
      </button>
      <AccountMenu
        isHidden={!userIsOpen}
        onClick={handleClick}
        ref={userMenuRef}
      />
    </div>
  );
}
