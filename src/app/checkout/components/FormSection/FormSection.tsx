"use client";

import { useState } from "react";
import styles from "../CheckoutForm/styles.module.css";

export default function FormSection({
  title,
  defaultExpanded = true,
  headerChildren,
  children,
}: {
  title: string;
  defaultExpanded?: boolean;
  headerChildren?: React.ReactNode;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  return (
    <section className={styles.formSection} data-expanded={expanded}>
      <header>
        <h2>{title}</h2>
        {headerChildren}
      </header>
      <main className={styles.form}>{children}</main>
    </section>
  );
}
