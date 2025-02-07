import styles from "../Button/Button.module.css";

export default function ToolTip({ text }: { text: string }) {
  return <span className={`${styles.toolTip} noselect`}>{text}</span>;
}
