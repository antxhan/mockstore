import Layout from "@/components/Layout";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <Layout>Product {id}</Layout>;
}
