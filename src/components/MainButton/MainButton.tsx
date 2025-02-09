import styles from "./MainButton.module.css";

export default function MainButton({
  icon,
  title,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <button className={`${className} ${styles.mainButton}`}>
      {icon}
      <span>{title}</span>
    </button>
  );
}
