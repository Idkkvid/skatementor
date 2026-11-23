import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  assetPrefix: process.env.ASSET_PREFIX || undefined,
};

export default nextConfig;
