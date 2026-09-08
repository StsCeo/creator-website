import { ProductsBrowser } from "./ProductsBrowser";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ niche?: string }>;
}) {
  const { niche } = await searchParams;
  return <ProductsBrowser initialNiche={niche} />;
}
