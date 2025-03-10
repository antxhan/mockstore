"use client";

import FormInput from "@/components/FormInput/FormInput";
import styles from "./styles.module.css";
import mainButtonStyles from "@/components/MainButton/MainButton.module.css";
import FormSection from "../FormSection/FormSection";
import { useActionState, useState } from "react";
import { submitOrder } from "../../actions/submitOrder";

export default function CheckoutForm() {
  const [data, action, isPending] = useActionState(submitOrder, undefined);

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <form className={styles.checkoutForm} action={action}>
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
      <FormSection
        title={"Delivery"}
        isExpanded={isExpanded}
        headerChildren={
          <div>
            <input
              type="checkbox"
              id="same-address"
              defaultChecked={true}
              onChange={() => setIsExpanded(!isExpanded)}
            />
            <label htmlFor="same-address">Same as billing address</label>
          </div>
        }
      >
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
      <FormSection title="Payment">
        <FormInput title="Card Number" placeholder="**** **** **** **" />
        <FormInput title="Expiration" placeholder="MM/YY" />
        <FormInput title="CVV" placeholder="***" />
      </FormSection>
      <button
        className={`${styles.checkout__completeButton} ${mainButtonStyles.mainButton}`}
        type="submit"
        disabled={true || isPending}
      >
        Complete Order
      </button>
    </form>
  );
}
