import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All images are served locally from /public/images (no remote image hosts).
  // Keep the config explicit: if a remote host is ever needed again, add it here.
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
