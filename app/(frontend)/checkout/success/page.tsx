import Link from "next/link";
import CircleCheckIcon from "@/icons/CircleCheckIcon";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center pt-8 [&_svg]:h-[100px] [&_svg]:w-[100px]">
      <CircleCheckIcon />
      <h1>Complete!</h1>
      <p>Your order has been placed.</p>
      <p>
        You can now return to the{" "}
        <Link href="/" className="font-bold">
          Home
        </Link>{" "}
        page.
      </p>
    </div>
  );
}
