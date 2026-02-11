import React from "react";
import styles from "./NoProductsFound.module.css";

export default function NoProductsFound() {
  return (
    <p className={styles.noProductsFound}>
      No products found, try adjusting your filters or searching for something
      else.
    </p>
  );
}
