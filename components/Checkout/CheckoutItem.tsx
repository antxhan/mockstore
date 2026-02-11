import Image from "next/image";
import { formatNumberWithSpaces } from "@/utils/utils";
import { CartItem } from "@/lib/types";

export default function CheckoutItem({ item }: { item: CartItem }) {
  return (
    <div className="flex items-center gap-2">
      <div className="aspect-square max-h-16 min-h-16 max-w-16 min-w-16 overflow-hidden rounded-lg border border-[var(--clr-neutral-300)] bg-[var(--clr-neutral-000)] p-1">
        <Image
          src={item.image}
          alt={item.title}
          width={100}
          height={100}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex max-w-[15ch] flex-col gap-1 overflow-hidden text-[var(--fs-small)]">
        <span className="overflow-hidden text-ellipsis whitespace-nowrap font-bold">
          {item.title}
        </span>
        <span>${formatNumberWithSpaces(item.price)}</span>
        <span>Qty: {formatNumberWithSpaces(item.quantity)}</span>
      </div>
    </div>
  );
}
