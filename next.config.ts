import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  esLint: {
    // Ignore linting during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
