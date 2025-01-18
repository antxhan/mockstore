import Image from "next/image";
import styles from "./styles.module.css";

export default function FilterWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.productFilter} aria-expanded="true">
      <header>
        <div>
          <h3>{title}</h3>
          <span className={styles.filterCount} data-visible="false"></span>
        </div>
        <Image
          src="icons/chevron-up.svg"
          alt="arrow icon"
          width={24}
          height={24}
        />
      </header>
      <main>{children}</main>
    </div>
  );
}
