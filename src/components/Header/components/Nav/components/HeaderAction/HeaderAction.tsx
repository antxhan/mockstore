// import Image from "next/image";
import Link from "next/link";
import styles from "./HeaderAction.module.css";
import { useNavContext } from "../../context";

export default function HeaderAction({
  path,
  count = 0,
  icon,
  title,
}: {
  path: string;
  count?: number;
  icon: React.ReactNode;
  title: string;
}) {
  const { isHidden, isMobile } = useNavContext();
  return (
    <Link
      href={path}
      className={styles.headerAction}
      {...(isHidden && isMobile && { tabIndex: -1 })}
    >
      <div>
        <span className={styles.headerActionsCount} data-visible={count > 0}>
          {count}
        </span>
        {icon}
      </div>
      <span className={styles.headerActionsLabel}>{title}</span>
    </Link>
  );
}
