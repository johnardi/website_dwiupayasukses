import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: true
  },
  images: {
    unoptimized: true,
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
