import Image from "next/image";
import Link from "next/link";
import styles from "./HeaderAction.module.css";

export default function HeaderAction({
  path,
  count = "",
  icon,
  title,
}: {
  path: string;
  count?: string;
  icon: string;
  title: string;
}) {
  return (
    <Link href={path} className={styles.headerAction}>
      <div>
        <span className={styles.headerActionsCount} data-visible="false">
          {count}
        </span>
        <Image src={icon} alt={title + " icon"} width={24} height={24} />
      </div>
      <span className={styles.headerActionsLabel}>{title}</span>
    </Link>
  );
}
