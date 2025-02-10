"use client";

import styles from "./MainButton.module.css";

export default function MainButton({
  icon,
  title,
  onClick,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className={`${className} ${styles.mainButton}`} onClick={onClick}>
      {icon}
      <span>{title}</span>
    </button>
  );
}
