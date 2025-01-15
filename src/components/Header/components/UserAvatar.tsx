import Image from "next/image";
import UserMenu from "./UserMenu";
import styles from "../styles.module.css";
import { useEffect, useRef } from "react";

export default function UserAvatar({
  userIsOpen,
  setUserIsOpen,
}: {
  userIsOpen: boolean;
  setUserIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const userMenuRef = useRef<HTMLDivElement | null>(null);
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
  }, [userIsOpen]);

  return (
    <div className={styles.headerAvatar}>
      <button onClick={handleClick} ref={userButtonRef}>
        <Image
          src="/images/placeholder.png"
          alt="User avatar"
          width={24}
          height={24}
        />
      </button>
      <span className={styles.headerActionsLabel}>User</span>
      <UserMenu
        isHidden={!userIsOpen}
        onClick={handleClick}
        ref={userMenuRef}
      />
    </div>
  );
}
