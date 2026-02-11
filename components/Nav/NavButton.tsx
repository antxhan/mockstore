import Image from "next/image";

export default function NavButton({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className="hidden h-8 w-8 items-center justify-center border-none bg-transparent max-[700px]:flex"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <Image src="/icons/menu-2.svg" alt="Menu icon" width={24} height={24} />
    </button>
  );
}
