import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/library', destination: '/' },
      { source: '/submit', destination: '/' },
      { source: '/subscribe', destination: '/' },
    ];
  },
};

export default nextConfig;
