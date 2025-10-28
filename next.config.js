/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true", // run only when you set ANALYZE=true
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    unoptimized: true, // for Netlify compatibility
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
