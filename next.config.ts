import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { routing } from "./i18n/routing"; // optional if you want to centralize config

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    serverActions: {}
  },
  images: {
    unoptimized: true
  }
};

const withNextIntl = createNextIntlPlugin(routing); // uses your defineRouting setup

export default withNextIntl(nextConfig);
