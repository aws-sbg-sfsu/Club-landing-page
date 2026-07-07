import type { NextConfig } from "next";

// Static export: the site builds to plain HTML/CSS/JS in `out/`,
// so it can be hosted anywhere (Vercel, S3+CloudFront, GitHub Pages).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
