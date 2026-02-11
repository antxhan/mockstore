import LikedProducts from "./components/LikedProducts";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import styles from "./styles.module.css";

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
      <div className={styles.header}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <h2>Your Likes</h2>
      </div>
      <LikedProducts />
    </>
  );
}
