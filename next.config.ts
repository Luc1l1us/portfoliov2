import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV == 'production'

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.68.113"],
  basePath: isProd ? '/portfolio' : '',
  output: 'export',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
