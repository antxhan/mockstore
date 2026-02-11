import { formatNumberWithSpaces, sumTotal } from "@/utils/utils";
import { CartItem } from "@/lib/types";
import Link from "next/link";
import CheckoutIcon from "@/icons/CheckoutIcon";

export default function CartSummary({ products }: { products: CartItem[] }) {
  return (
    <aside className="sticky top-4 flex h-max flex-col gap-4 rounded-2xl border border-neutral-300 p-4">
      <h2 className="border-b border-neutral-300 pb-4">Total</h2>
      <div className="flex items-center justify-between">
        <h3>Subtotal</h3>
        <span>${formatNumberWithSpaces(sumTotal(products))}</span>
      </div>
      <Link
        href="/checkout"
        className={`main-button border-none ${products.length < 1 ? "pointer-events-none bg-neutral-300 text-neutral-500 hover:bg-neutral-300" : ""}`}
      >
        <CheckoutIcon />
        <span>Checkout</span>
      </Link>
    </aside>
  );
}
