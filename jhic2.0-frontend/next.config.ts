import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.smktelkom-mlg.sch.id",
      },
      {
        protocol: "https", 
        hostname : "images.unsplash.com"
      },
      {
        protocol : "https",
        hostname : "ui-avatars.com"
      },
      {
        protocol: "https",
        hostname: "logo.clearbit.com"
      }
    ],
  },
  eslint: {
    ignoreDuringBuilds: process.env.IGNORE_LINT_DURING_BUILD === 'true',
  },
};

export default nextConfig;
