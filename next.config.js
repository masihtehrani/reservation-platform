/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/reservation-platform' : '',
  // basePath: process.env.NODE_ENV === 'production' ? '/reservation-platform' : '',
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
