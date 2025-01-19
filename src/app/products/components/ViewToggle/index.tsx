import styles from "./styles.module.css";
import GridIcon from "@/icons/GridIcon";
import ListIcon from "@/icons/ListIcon";
import React from "react";

export default function ViewToggle({
  view,
  setView,
}: {
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setView(e.currentTarget.value);
  };
  return (
    <div className={styles.viewToggle}>
      <button
        onClick={handleChange}
        value="grid"
        className={view === "grid" ? styles.active : ""}
      >
        <GridIcon />
      </button>
      <button
        onClick={handleChange}
        value="list"
        className={view === "list" ? styles.active : ""}
      >
        <ListIcon />
      </button>
    </div>
  );
}
