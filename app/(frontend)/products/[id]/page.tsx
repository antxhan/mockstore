import Breadcrumbs from "@/components/Breadcrumbs";
import { api } from "@/utils/api";
import {
  formatNumberWithSpaces,
  toCamelCase,
  toCapitalize,
} from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { categoryIcon } from "@/icons/categoryIcons/categoryIcon";
import RelatedProducts from "./components/RelatedProducts";
import ProductActions from "./components/ProductActions";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const product = await api.product(parseInt(id));
  const relatedProducts = (
    await api.category({ category: product.category, limit: 4 })
  ).filter((item) => item.id !== product.id);
  const breadcrumbs = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/products",
      title: "Products",
    },
    {
      path: "/products/" + id,
      title: product.title,
    },
  ];

  return (
    <>
      <header className="grid gap-2 py-6">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </header>
      <div className="grid grid-cols-[50%_auto] gap-[clamp(2rem,4vw,4rem)] max-[700px]:grid-cols-1">
        <div className="flex items-center justify-center rounded-2xl border border-neutral-300 p-4">
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={600}
            className="aspect-square w-full object-contain"
            priority={true}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Link
            href={`/products?category=${product.category}`}
            className="flex w-max items-center gap-1 font-bold hover:text-neutral-500 [&_svg]:h-6 [&_svg]:w-6"
          >
            {categoryIcon(toCamelCase(product.category))}
            {toCapitalize(product.category)}
          </Link>
          <h2 className="text-balance">{product.title}</h2>
          <div className="grid grid-cols-[auto_1fr] items-center text-[1.2rem] text-neutral-500">
            <div className="relative text-neutral-250 tracking-[0.25rem]">
              ★★★★★
              <div
                className="absolute top-0 left-0 overflow-hidden text-primary"
                style={{ width: `${(product.rating.rate / 5) * 100}%` }}
              >
                ★★★★★
              </div>
            </div>
            <div className="text-small">
              {product.rating.count} reviews
            </div>
          </div>
          <span className="text-large font-bold">
            ${formatNumberWithSpaces(product.price)}
          </span>
          <p className="text-pretty">{product.description}</p>
          <ProductActions product={product} />
        </div>
      </div>
      <RelatedProducts relatedProducts={relatedProducts} />
    </>
  );
}
