import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { routing } from "./i18n/routing";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    serverActions: {}
  },
  images: {
    unoptimized: true
  }
};

const withNextIntl = createNextIntlPlugin(routing);

export default withNextIntl(nextConfig);
