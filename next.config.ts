import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
    deviceSizes: [640, 1080, 1600, 2400],
    imageSizes: [384],
  },
  async headers() {
    const longCache = [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }];
    return [
      { source: "/media/:path*", headers: longCache },
      { source: "/brands/:file(.*\\.webp)", headers: longCache },
    ];
  },
  async redirects() {
    // Superbeing Nutrition has its own flagship page.
    return [{ source: "/brands/super-being", destination: "/superbeing", permanent: true }];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
