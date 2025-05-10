import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/.well-known/:path*",
        destination: "/404",
      },
    ];
  },
};

export default nextConfig;
