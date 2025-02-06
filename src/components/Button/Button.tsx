import ToolTip from "../ToolTip/ToolTip";
import styles from "./Button.module.css";

export default function Button({
  icon,
  text,
  ariaLabel,
  className,
  value,
  onClick,
}: {
  icon?: React.ReactNode;
  text?: string;
  ariaLabel?: string;
  className?: string;
  value?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      className={`${className} ${styles.button}`}
      onClick={onClick}
      {...(value && { value: value })}
      {...(ariaLabel && !text && { "aria-label": ariaLabel })}
    >
      {icon && icon}
      {text && <span>{text}</span>}
      {ariaLabel && <ToolTip text={ariaLabel} />}
    </button>
  );
}
