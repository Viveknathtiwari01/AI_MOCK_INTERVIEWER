/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
      bodySizeLimit: "2mb"
    }
  },
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        fs: false,
      },
      alias: {
        ...config.resolve.alias,
        '@': '.',
        '@/lib': './lib',
        '@/components': './components',
        '@/app': './app'
      }
    };
    return config;
  },
}

module.exports = nextConfig 