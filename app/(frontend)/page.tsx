// import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import ProductsGrid from "@/components/ProductsGrid";
import { api } from "@/utils/api";
import { Suspense } from "react";

export default async function Home() {
  const products = await api.products({ limit: 4 });
  return (
    <>
      <section className="relative mt-8 overflow-hidden">
        <div>
          <Image
            src="/images/hero.jpg"
            alt="Mock Store"
            width={1200}
            height={700}
            className="rounded-2xl"
            priority={true}
          />
        </div>
        <h1 className="absolute top-[calc(50%-2.5rem)] left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-[clamp(0.5rem,1.5vw,2rem)] text-nowrap text-center text-[clamp(1.5rem,9vw,7.5rem)] text-[var(--clr-primary)] mix-blend-color-dodge max-[700px]:top-1/2 max-[700px]:gap-4 max-[700px]:text-[clamp(1.5rem,10vw,4.75rem)]">
          <span>Mock Trends.</span>
          <span>Mock Prices.</span>
          <span>Mock Everything.</span>
        </h1>
        <Link
          href="/products"
          className="absolute bottom-[5%] left-1/2 flex h-[clamp(3rem,5vw,3.5rem)] w-max -translate-x-1/2 items-center justify-center gap-1 rounded-lg bg-[var(--clr-primary)] px-8 hover:bg-[var(--clr-primary-light)] hover:text-[var(--clr-neutral-900)]"
        >
          <Image
            src="/icons/cart.svg"
            alt="Arrow right"
            width={24}
            height={24}
          />
          <span>Shop now</span>
        </Link>
      </section>

      <section className="mt-12 max-[700px]:mt-8">
        <h2 className="mb-4">Shop by Category</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
          <CategoryCard category="Men's Clothing" />
          <CategoryCard category="Women's Clothing" />
          <CategoryCard category="Jewelery" />
          <CategoryCard category="Electronics" />
        </div>
      </section>

      <section className="mt-12 max-[700px]:mt-8">
        <header className="mb-4 flex items-center justify-between">
          <h2>New Arrivals</h2>
          <Link
            href="/products"
            className="underline decoration-[var(--clr-primary)] decoration-2"
          >
            View All
          </Link>
        </header>
        <div>
          <Suspense fallback={<div>Loading products...</div>}>
            <ProductsGrid products={products} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
