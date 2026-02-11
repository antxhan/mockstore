"use client";

import ToolTip from "../ToolTip/ToolTip";

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
      className={`button group relative border-none bg-transparent ${className ?? ""}`}
      onClick={(e) => {
        e.currentTarget.blur();
        if (onClick) onClick(e);
      }}
      {...(value && { value: value })}
      {...(ariaLabel && !text && { "aria-label": ariaLabel })}
      {...(disabled && { disabled: disabled })}
    >
      {icon && (
        <div className="relative flex items-center justify-center">
          {icon}
          {hoverIcon && (
            <span className="hoverIcon absolute top-0 left-0 h-full w-full opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
              {hoverIcon}
            </span>
          )}
        </div>
      )}
      {text && <span>{text}</span>}
      {ariaLabel && !disabled && <ToolTip text={ariaLabel} />}
    </button>
  );
}
