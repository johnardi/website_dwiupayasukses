import { productMap } from "@/components/products/productMap";

const fallbackSlug = "ginger-elephant";

export function getProductData(slug: string) {
  const isValidSlug = slug in productMap;
  const safeSlug = isValidSlug ? slug : fallbackSlug;
  const imagesData = productMap[safeSlug] ?? [];

  return {
    slug: safeSlug,
    imagesData,
    isValid: isValidSlug,
  };
}
