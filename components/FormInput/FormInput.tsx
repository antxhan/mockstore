import styles from "./FormInput.module.css";
import { toCamelCase } from "@/utils/utils";

export default function FormInput({
  title,
  type = "text",
  placeholder = "",
  required = true,
  pattern = "",
}: {
  title: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
}) {
  return (
    <div className={styles.formInput}>
      <label className={styles.formInput__label} htmlFor={toCamelCase(title)}>
        {title}
      </label>
      <input
        className={styles.formInput__input}
        type={type}
        name={toCamelCase(title)}
        id={toCamelCase(title)}
        {...(placeholder && { placeholder })}
        {...(required && { required })}
        {...(pattern && { pattern })}
      />
    </div>
  );
}
