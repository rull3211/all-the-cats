import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn2.thecatapi.com",
      },
      {
        protocol: "https",
        hostname: "25.media.tumblr.com",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
