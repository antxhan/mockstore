import FormInput from "@/components/FormInput/FormInput";
import styles from "./styles.module.css";
import mainButtonStyles from "@/components/MainButton/MainButton.module.css";
import FormSection from "../FormSection/FormSection";

export default function CheckoutForm() {
  return (
    <form className={styles.checkoutForm}>
      {/* <section className={styles.checkout__info} data-expanded="true">
        <main>
          <h2>Info</h2>
          <div className={styles.form}>
            <FormInput title="First Name" placeholder="John" />
            <FormInput title="Last Name" placeholder="Doe" />
            <FormInput
              title="Email"
              type="email"
              placeholder="john.doe@gmail.com"
            />
            <FormInput title="Phone" type="tel" placeholder="(555) 555-5555" />
            <FormInput title="Address" placeholder="123 Main St" />
            <FormInput title="City" placeholder="Anytown" />
            <FormInput title="State" placeholder="CA" />
            <FormInput title="Zip" placeholder="12345" />
          </div>
        </main>
      </section> */}
      <FormSection title="Info">
        <FormInput title="First Name" placeholder="John" />
        <FormInput title="Last Name" placeholder="Doe" />
        <FormInput
          title="Email"
          type="email"
          placeholder="john.doe@gmail.com"
        />
        <FormInput title="Phone" type="tel" placeholder="(555) 555-5555" />
        <FormInput title="Address" placeholder="123 Main St" />
        <FormInput title="City" placeholder="Anytown" />
        <FormInput title="State" placeholder="CA" />
        <FormInput title="Zip" placeholder="12345" />
      </FormSection>
      <section className={styles.checkout__delivery} data-expanded="false">
        <header>
          <h2>Delivery</h2>
          <div>
            <input type="checkbox" id="same-address" checked />
            <label htmlFor="same-address">Same as billing address</label>
          </div>
        </header>
        <main>
          <div className={styles.form}>
            <FormInput title="First Name" placeholder="John" />
            <FormInput title="Last Name" placeholder="Doe" />
            <FormInput
              title="Email"
              type="email"
              placeholder="john.doe@gmail.com"
            />
            <FormInput title="Phone" type="tel" placeholder="(555) 555-5555" />
            <FormInput title="Address" placeholder="123 Main St" />
            <FormInput title="City" placeholder="Anytown" />
            <FormInput title="State" placeholder="CA" />
            <FormInput title="Zip" placeholder="12345" />
          </div>
        </main>
      </section>
      <section className={styles.checkout__payment} data-expanded="true">
        <main>
          <h2>Payment</h2>
          <div className={styles.form}>
            <FormInput title="Card Number" placeholder="**** **** **** **" />
            <FormInput title="Expiration" placeholder="MM/YY" />
            <FormInput title="CVV" placeholder="***" />
          </div>
        </main>
      </section>
      <button
        className={`${styles.checkout__completeButton} ${mainButtonStyles.mainButton}`}
        type="submit"
        disabled
      >
        Complete Order
      </button>
    </form>
  );
}
