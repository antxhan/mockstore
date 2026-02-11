import LikedProducts from "./LikedProducts";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function page() {
  const breadcrumbs = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/likes",
      title: "Likes",
    },
  ];
  return (
    <>
      <div className="grid gap-2 py-6">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <h2>Your Likes</h2>
      </div>
      <LikedProducts />
    </>
  );
}
