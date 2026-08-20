/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true", // run only when you set ANALYZE=true
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t3.ftcdn.net",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  webpack(config, { dev, isServer }) {
    // ✅ Better chunk naming for debugging large bundles
    if (!isServer && !dev) {
      config.output.chunkFilename = "static/chunks/[name].[contenthash].js";
    }

    return config;
  },
});

module.exports = nextConfig;
