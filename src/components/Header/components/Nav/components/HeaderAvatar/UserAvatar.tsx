import AccountMenu from "../AccountMenu/UserMenu";
import styles from "./HeaderAvatar.module.css";
import headerActionStyles from "../HeaderAction/HeaderAction.module.css";
import { useEffect, useRef, useState } from "react";
import UserIcon from "@/icons/UserIcon";
import { useNavContext } from "../../context";

export default function UserAvatar() {
  const { isHidden, isMobile } = useNavContext();
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
    <div className={styles.headerAvatar}>
      <div
        className={`${headerActionStyles.headerAction} ${styles.buttonWrapper}`}
      >
        <button
          onClick={handleClick}
          ref={userButtonRef}
          {...(isHidden && isMobile && { tabIndex: -1 })}
        >
          <UserIcon />
          <span className={headerActionStyles.headerActionsLabel}>Account</span>
        </button>
      </div>
      <AccountMenu
        userIsOpen={!userIsOpen}
        onClick={handleClick}
        ref={userMenuRef}
      />
    </div>
  );
}
