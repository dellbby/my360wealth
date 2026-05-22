import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "static.fmgsuite.com" },
      { protocol: "https", hostname: "fmg-websites-custom.s3.amazonaws.com" },
      { protocol: "https", hostname: "peakwebsites.s3.amazonaws.com" },
      { protocol: "https", hostname: "peakwebsites.s3.us-west-2.amazonaws.com" },
    ],
  },
};

export default nextConfig;
