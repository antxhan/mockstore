import Breadcrumbs from "@/components/Breadcrumbs";
import CheckoutForm from "@/components/Checkout/CheckoutForm";
import CheckoutSummary from "@/components/Checkout/CheckoutSummary";

export default function page() {
  const breadcrumbs = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/cart",
      title: "Cart",
    },
    {
      path: "/checkout",
      title: "Checkout",
    },
  ];
  return (
    <>
      <header className="grid gap-2 py-6">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </header>
      <main className="relative grid grid-cols-[3fr_minmax(250px,1fr)] gap-4 max-[700px]:grid-cols-1">
        <CheckoutForm />
        <CheckoutSummary />
      </main>
    </>
  );
}
