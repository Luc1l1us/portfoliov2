import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV == 'production'

const nextConfig: NextConfig = {
  cacheComponents: true,
  cacheLife: {
    alwaysCheck15m: {
      stale: 0,
      revalidate: 900,
      expire: 86400,
    }
  },
  experimental: {
    useCache: true,
  },
  allowedDevOrigins: ["192.168.68.113"],
  basePath: isProd ? '/portfolio' : '',
  output: 'export',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
