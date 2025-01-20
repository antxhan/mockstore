"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { Suspense, useState } from "react";

export default function FilterWrapper({
  title,
  indicator,
  children,
}: {
  title: string;
  indicator?: string | null;
  children: React.ReactNode;
}) {
  // const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={styles.productFilter} aria-expanded={isOpen}>
      <header onClick={() => setIsOpen(!isOpen)}>
        <div>
          <h3>{title}</h3>
          <span
            className={styles.filterCount}
            data-visible={indicator ? true : false}
          >
            {indicator}
          </span>
        </div>
        <Image
          src="icons/chevron-up.svg"
          alt="arrow icon"
          width={24}
          height={24}
        />
      </header>
      <Suspense fallback="Loading filter...">
        <main>{children}</main>
      </Suspense>
    </div>
  );
}
