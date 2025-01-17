import Image from "next/image";
import Link from "next/link";
import styles from "../styles.module.css";

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
      path: "/account",
      title: "Account",
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
        <button onClick={onClick}>
          <Image src="icons/x.svg" alt="Close icon" width={24} height={24} />
        </button>
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
