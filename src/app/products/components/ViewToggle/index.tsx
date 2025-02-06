import Button from "@/components/Button/Button";
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
      <Button
        ariaLabel="Grid"
        icon={<GridIcon />}
        value="grid"
        className={view === "grid" ? styles.active : ""}
        onClick={handleChange}
      />
      <Button
        ariaLabel="List"
        icon={<ListIcon />}
        value="list"
        className={view === "list" ? styles.active : ""}
        onClick={handleChange}
      />
    </div>
  );
}
