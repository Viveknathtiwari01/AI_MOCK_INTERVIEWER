/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
      bodySizeLimit: "2mb"
    }
  },
  transpilePackages: ['@/lib', '@/components', '@/app'],
  distDir: '.next'
}

module.exports = nextConfig 