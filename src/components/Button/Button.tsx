"use client";

import ToolTip from "../ToolTip/ToolTip";
import styles from "./Button.module.css";

export default function Button({
  icon,
  hoverIcon,
  text,
  ariaLabel,
  className,
  value,
  onClick,
  disabled,
}: {
  icon?: React.ReactNode;
  hoverIcon?: React.ReactNode;
  text?: string;
  ariaLabel?: string;
  className?: string;
  value?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}) {
  return (
    <button
      className={`${className} ${styles.button}`}
      onClick={(e) => {
        e.currentTarget.blur();
        if (onClick) onClick(e);
      }}
      {...(value && { value: value })}
      {...(ariaLabel && !text && { "aria-label": ariaLabel })}
      {...(disabled && { disabled: disabled })}
    >
      {icon && (
        <div className={styles.buttonIcon}>
          {icon}
          {hoverIcon && <span className={styles.hoverIcon}>{hoverIcon}</span>}
        </div>
      )}
      {text && <span>{text}</span>}
      {ariaLabel && <ToolTip text={ariaLabel} />}
    </button>
  );
}
