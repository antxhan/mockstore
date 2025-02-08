import Link from "next/link";
import styles from "./AccountMenu.module.css";
import Button from "@/components/Button/Button";
import XIcon from "@/icons/XIcon";

export default function UserMenu({
  isHidden,
  onClick,
  ref,
}: {
  isHidden: boolean;
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
  return (
    <div className={styles.headerAvatarMenu} aria-hidden={isHidden} ref={ref}>
      <div className={styles.triangle}></div>
      <div className={styles.headerAvatarMenuTopRow}>
        <Link href="/sign-in">Sign In</Link>
        {"|"}
        <Link href="/register">Join</Link>
        <Button onClick={onClick} icon={<XIcon />} ariaLabel="Close menu" />
      </div>
      <ul>
        {options.map((option) => (
          <li key={option.title}>
            <Link href={option.path}>{option.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
