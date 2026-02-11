import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="w-max text-nowrap text-large font-bold hover:text-inherit"
    >
      M<span className="max-[700px]:hidden">ock</span>S
      <span className="max-[700px]:hidden">tore</span>
    </Link>
  );
}
