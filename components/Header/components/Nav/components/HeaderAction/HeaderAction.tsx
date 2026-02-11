import Image from "next/image";
import Link from "next/link";
import { useNavContext } from "../../context";

export default function HeaderAction({
  path,
  count = 0,
  icon,
  title,
  className = "",
}: {
  path: string;
  count?: number;
  icon: React.ReactNode | string;
  title: string;
  className?: string;
}) {
  const { isHidden, isMobile, setIsHidden } = useNavContext();
  return (
    <Link
      href={path}
      className={`flex flex-col items-center hover:text-[var(--clr-neutral-500)] hover:[&_svg]:text-[var(--clr-neutral-500)] max-[700px]:flex-row max-[700px]:gap-2 max-[700px]:hover:text-inherit max-[700px]:hover:[&_svg]:text-inherit ${className}`}
      onClick={() => setIsHidden(true)}
      {...(isHidden && isMobile && { tabIndex: -1 })}
    >
      <div className="relative">
        <span
          className="absolute -top-2 -right-2 flex h-[1.4rem] w-[1.4rem] items-center justify-center rounded-2xl bg-[var(--clr-primary)] text-[var(--fs-xsmall)] font-bold data-[visible=false]:hidden"
          data-visible={count > 0}
        >
          {count}
        </span>
        {typeof icon === "string" ? (
          <Image src={icon} alt={title} width={28} height={28} />
        ) : (
          icon
        )}
      </div>
      <span className="text-[var(--fs-small)] font-bold">{title}</span>
    </Link>
  );
}
