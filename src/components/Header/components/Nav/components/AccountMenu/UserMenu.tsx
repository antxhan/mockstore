import Link from "next/link";
import styles from "./AccountMenu.module.css";
import Button from "@/components/Button/Button";
import XIcon from "@/icons/XIcon";
import { useNavContext } from "../../context";

export default function UserMenu({
  userIsOpen,
  onClick,
  ref,
}: {
  userIsOpen: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  ref: React.RefObject<HTMLDivElement> | null;
}) {
  const options = [
    {
      path: "/settings",
      title: "Settings",
    },
    {
      path: "/orders",
      title: "Orders",
    },
    {
      path: "/returns",
      title: "Returns",
    },
    {
      path: "/help",
      title: "Help",
    },
  ];
  const { isHidden, isMobile } = useNavContext();
  return (
    <div className={styles.headerAvatarMenu} aria-hidden={userIsOpen} ref={ref}>
      <div className={styles.triangle}></div>
      <div className={styles.headerAvatarMenuTopRow}>
        <Link href="/sign-in" {...(isHidden && isMobile && { tabIndex: -1 })}>
          Sign In
        </Link>
        {"|"}
        <Link href="/register" {...(isHidden && isMobile && { tabIndex: -1 })}>
          Join
        </Link>
        <Button
          onClick={onClick}
          icon={<XIcon />}
          ariaLabel="Close menu"
          disabled={isHidden && isMobile}
        />
      </div>
      <ul>
        {options.map((option) => (
          <li key={option.title}>
            <Link
              href={option.path}
              {...(isHidden && isMobile && { tabIndex: -1 })}
            >
              {option.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
