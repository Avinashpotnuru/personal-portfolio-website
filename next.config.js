/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // for Netlify compatibility
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig
