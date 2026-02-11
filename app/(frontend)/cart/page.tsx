import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Cart from "./components/Cart";

export default function page() {
  const breadcrumbs = [
    { path: "/", title: "Home" },
    { path: "/cart", title: "Cart" },
  ];
  return (
    <>
      <header className="grid gap-2 py-6">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </header>
      <main className="grid grid-cols-[3fr_minmax(250px,1fr)] gap-4 max-[700px]:grid-cols-1">
        <Cart />
      </main>
    </>
  );
}
