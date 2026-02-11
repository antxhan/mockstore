import styles from "../CheckoutForm/styles.module.css";

export default function FormSection({
  title,
  isExpanded = true,
  headerChildren,
  children,
}: {
  title: string;
  isExpanded?: boolean;
  headerChildren?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.formSection} data-expanded={isExpanded}>
      <header>
        <h2>{title}</h2>
        {headerChildren}
      </header>
      <main className={styles.form}>{children}</main>
    </section>
  );
}
