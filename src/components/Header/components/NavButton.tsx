import Image from "next/image";
import styles from "../styles.module.css";

export default function NavButton({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={styles.headerMenuButton}
      aria-hidden="true"
      onClick={onClick}
    >
      <Image src="icons/menu-2.svg" alt="Menu icon" width={24} height={24} />
    </button>
  );
}
