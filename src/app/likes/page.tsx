import Layout from "@/components/Layout";
import LikedProducts from "./components/LikedProducts";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import styles from "./styles.module.css";
// import RelatedProducts from "./components/RelatedProducts";

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
    <Layout>
      <div className={styles.header}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <h1>Your Likes</h1>
      </div>
      <LikedProducts />
    </Layout>
  );
}
