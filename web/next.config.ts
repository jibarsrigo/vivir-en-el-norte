import type { NextConfig } from "next";

const base = process.env.NEXT_PUBLIC_BASE || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: base || undefined,
  assetPrefix: base || undefined,
  env: {
    NEXT_PUBLIC_BASE: base,
  },
};

export default nextConfig;
