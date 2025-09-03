import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    serverActions: {}
  },
  images: {
    unoptimized: true
  }
};

// ✅ Don't pass `routing` here — it's for middleware only
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
