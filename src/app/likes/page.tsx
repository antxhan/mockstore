import Layout from "@/components/Layout";
import LikedProducts from "./LikedProducts";
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
    <Layout>
      <header className={styles.header}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </header>
      <LikedProducts />
    </Layout>
  );
}
