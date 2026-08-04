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
      },
      // Curriculum microsite reference (kurikulum.smktelkom-mlg.sch.id)
      {
        protocol: "https",
        hostname: "kurikulum.smktelkom-mlg.sch.id"
      },
      // Konsentrasi expertise-track images (reference detail pages)
      {
        protocol: "https",
        hostname: "msoft.team"
      },
      {
        protocol: "https",
        hostname: "miro.medium.com"
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com"
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com"
      },
      {
        protocol: "https",
        hostname: "www.shutterstock.com"
      },
      {
        protocol: "https",
        hostname: "www.coursesonline.co.uk"
      },
      {
        protocol: "https",
        hostname: "www.chi.ac.uk"
      },
      {
        protocol: "https",
        hostname: "www.dot.co.id"
      }
    ],
  },
  
};

export default nextConfig;
