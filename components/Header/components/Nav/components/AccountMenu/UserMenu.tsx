import Link from "next/link";
import Button from "@/components/Button/Button";
import XIcon from "@/icons/XIcon";
import { useNavContext } from "../../context";

export default function UserMenu({
  userIsOpen,
  onClick,
  ref,
}: {
  userIsOpen: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  ref: React.RefObject<HTMLDivElement> | null;
}) {
  const options = [
    {
      path: "/settings",
      title: "Settings",
    },
    {
      path: "/orders",
      title: "Orders",
    },
    {
      path: "/returns",
      title: "Returns",
    },
    {
      path: "/help",
      title: "Help",
    },
  ];
  const { isHidden, isMobile } = useNavContext();
  return (
    <div
      className="absolute top-16 right-1 z-2 block min-w-[200px] overflow-visible rounded-2xl border-none bg-[var(--clr-neutral-200)] shadow-[0_0.5rem_1rem_rgba(0,0,0,0.05)] aria-hidden:hidden max-[700px]:static max-[700px]:block max-[700px]:bg-transparent max-[700px]:text-[var(--fs-small)] max-[700px]:shadow-none max-[700px]:aria-hidden:block"
      aria-hidden={userIsOpen}
      ref={ref}
    >
      <div className="absolute top-[-0.5rem] right-4 h-4 w-4 rotate-45 bg-[var(--clr-neutral-200)] max-[700px]:hidden"></div>
      <div className="flex items-center gap-2 rounded-[inherit] bg-[var(--clr-neutral-200)] p-4 text-nowrap max-[700px]:hidden">
        <Link href="/sign-in" {...(isHidden && isMobile && { tabIndex: -1 })}>
          Sign In
        </Link>
        {"|"}
        <Link href="/register" {...(isHidden && isMobile && { tabIndex: -1 })}>
          Join
        </Link>
        <Button
          onClick={onClick}
          icon={<XIcon />}
          ariaLabel="Close"
          disabled={isHidden && isMobile}
        />
      </div>
      <ul className="flex list-none flex-col rounded-b-2xl border border-[var(--clr-neutral-200)] border-t-0 bg-[var(--clr-neutral-000)] px-4 max-[700px]:list-disc max-[700px]:border-none max-[700px]:bg-transparent max-[700px]:pl-9">
        {options.map((option) => (
          <li
            key={option.title}
            className="border-b border-[var(--clr-neutral-300)] py-3 last:border-none max-[700px]:border-none max-[700px]:py-2"
          >
            <Link
              href={option.path}
              {...(isHidden && isMobile && { tabIndex: -1 })}
            >
              {option.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
