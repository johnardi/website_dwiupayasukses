import Products from "@/components/products/Products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;

  return <Products slug={slug} />;
}
