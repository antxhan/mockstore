import Layout from "@/components/Layout";
import Link from "next/link";
import "./globals.css";

export default function NotFound() {
  return (
    <Layout>
      <p className={"notFound"}>
        404: Oops! This page {`doesn't`} exist yet. Go back to{" "}
        <Link href="/">Home</Link>.
      </p>
    </Layout>
  );
}
