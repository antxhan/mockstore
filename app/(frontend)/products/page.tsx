import { api } from "@/utils/api";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import MainSection from "./components/MainSection";
import FiltersSection from "./components/FiltersSection/FiltersSection";
import { Suspense } from "react";

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const filters = await searchParams;
  const products = await api.products({ filters });
  const breadcrumbs = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/products",
      title: "Products",
    },
  ];
  return (
    <>
      <header className="grid gap-2 py-6">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <h2>
          {products.length === 1
            ? `${products.length} result`
            : `${products.length} results`}
        </h2>
      </header>
      <main className="grid grid-cols-[250px_1fr] gap-10 max-[700px]:grid-cols-1">
        <Suspense fallback={<div>Loading products...</div>}>
          <FiltersSection />
        </Suspense>
        <MainSection products={products} />
      </main>
    </>
  );
}
