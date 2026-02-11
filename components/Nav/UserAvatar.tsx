import AccountMenu from "./UserMenu";
import { useEffect, useRef, useState } from "react";
import UserIcon from "@/icons/UserIcon";
import { useNavContext } from "@/contexts/nav-context";

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
    <div className="relative h-full max-[700px]:grid max-[700px]:items-center max-[700px]:gap-2">
      <div className="flex h-full flex-col items-center max-[700px]:items-start">
        <button
          onClick={handleClick}
          ref={userButtonRef}
          className="flex h-full flex-col items-center justify-between max-[700px]:pointer-events-none max-[700px]:flex-row max-[700px]:gap-2 max-[700px]:justify-start"
          {...(isHidden && isMobile && { tabIndex: -1 })}
        >
          <UserIcon />
          <span className="text-small font-bold">Account</span>
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
