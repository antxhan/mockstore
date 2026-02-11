"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";
import Button from "@/components/Button/Button";

export default function FilterWrapper({
  title,
  indicator,
  children,
}: {
  title: string;
  indicator?: string | null;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={styles.productFilter}>
      <header onClick={() => setIsOpen(!isOpen)}>
        <div>
          <h3>{title}</h3>
          <span
            className={styles.filterCount}
            data-visible={indicator && !isOpen ? true : false}
          >
            {indicator}
          </span>
        </div>
        <Button
          icon={
            <Image
              src="icons/chevron-up.svg"
              alt="arrow icon"
              width={24}
              height={24}
            />
          }
          ariaLabel={isOpen ? `Hide` : `Show`}
          onClick={() => setIsOpen(!isOpen)}
          className={!isOpen ? styles.rotate : ""}
        />
      </header>
      <main aria-hidden={!isOpen}>{children}</main>
    </div>
  );
}
