import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    serverActions: {} // ✅ must be an object, not a boolean
  },
  images: {
    unoptimized: true
  },
  i18n: {
    locales: ["id", "en"],
    defaultLocale: "id"
  }
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
