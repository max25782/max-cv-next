/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/max-cv-next',
  assetPrefix: '/max-cv-next/',
  trailingSlash: true,
}

module.exports = nextConfig 