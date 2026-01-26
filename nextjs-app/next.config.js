/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Static export for Cloudflare Pages (Next.js 16 compatible)
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
