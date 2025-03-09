import styles from "../CheckoutForm/styles.module.css";

export default function FormSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.checkout__info} data-expanded="true">
      <main>
        <h2>{title}</h2>
        <div className={styles.form}>{children}</div>
      </main>
    </section>
  );
}
