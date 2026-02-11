"use client";

import { Product } from "@/lib/types";
import { formatNumberWithSpaces } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import LikeButton from "../LikeButton/LikeButton";

export default function ProductsCard({
  product,
  view,
  index,
}: {
  product: Product;
  view: string;
  index: number;
}) {
  return (
    <Link
      href={`/products/${product.id}`}
      className={
        view === "grid"
          ? "grid grid-rows-[auto_1fr_auto] gap-2 text-inherit no-underline hover:text-inherit"
          : "flex rounded-2xl border border-[var(--clr-neutral-300)] hover:text-inherit"
      }
    >
      <div
        className={
          view === "grid"
            ? "rounded-lg border border-[var(--clr-neutral-300)]"
            : "my-4 ml-4 flex h-24 w-24 min-h-24 min-w-24 items-center justify-center border-r border-[var(--clr-neutral-300)] pr-4"
        }
      >
        <Image
          src={product.image}
          alt={product.title}
          width={240}
          height={240}
          priority={index <= 6}
          className={`h-full w-full object-contain transition-all duration-200 ease-in-out hover:scale-[1.025] ${
            view === "grid" ? "aspect-square p-4" : "p-0"
          }`}
        />
      </div>
      <div
        className={
          view === "grid"
            ? "grid grid-cols-[1fr_auto] grid-rows-[1fr_auto] gap-2"
            : "grid w-full grid-cols-[1fr_4rem] grid-rows-2 gap-0 p-4"
        }
      >
        <h3 className={view === "list" ? "self-end mb-1" : ""}>{product.title}</h3>
        <span className={view === "list" ? "self-start" : "flex items-center"}>
          ${formatNumberWithSpaces(product.price)}
        </span>
        <LikeButton
          productId={product.id}
          className={view === "list" ? "col-start-2 row-span-2 place-self-center" : ""}
        />
      </div>
    </Link>
  );
}
