import { categoryIcon } from "@/icons/categoryIcons/categoryIcon";
import { toCamelCase } from "../utils/utils";
import Link from "next/link";

export default function CategoryCard({ category }: { category: string }) {
  return (
    <Link
      href={`/products?category=${category.toLowerCase()}`}
      className="flex items-center gap-2 rounded-lg border border-neutral-300 p-4 transition-all duration-100 ease-in-out hover:border-primary hover:text-inherit"
    >
      {categoryIcon(toCamelCase(category))}
      <span>{category}</span>
    </Link>
  );
}
