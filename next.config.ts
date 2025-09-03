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

// ✅ No arguments needed — plugin auto-detects messages
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
