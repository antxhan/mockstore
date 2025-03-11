"use client";

import styles from "./MainButton.module.css";

export default function MainButton({
  icon,
  title,
  onClick,
  className = "",
  ref = null,
}: {
  icon: React.ReactNode;
  title: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ref?: React.Ref<HTMLButtonElement> | null;
}) {
  return (
    <button
      className={`${className} ${styles.mainButton}`}
      onClick={onClick}
      {...(ref && { ref })}
    >
      {icon}
      <span>{title}</span>
    </button>
  );
}
