import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Supported locales
  locales: ["en", "id"],

  // Fallback locale if none matches
  defaultLocale: "id",

  // Only prefix locale in URL when needed (e.g. non-default)
  localePrefix: "as-needed"
});
