import Link from "next/link";

export default function Categories() {
  const categories = [
    { path: "/products?category=men's clothing", title: "Men's Clothing" },
    { path: "/products?category=women's clothing", title: "Women's Clothing" },
    { path: "/products?category=jewelery", title: "Jewelery" },
    { path: "/products?category=electronics", title: "Electronics" },
    { path: "/products", title: "All" },
  ];
  return (
    <ul className="col-span-3 flex list-none gap-10 max-[700px]:hidden">
      {categories.map((category) => (
        <li key={category.title}>
          <Link href={category.path} className="text-normal font-bold">
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
