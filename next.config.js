/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: { images: { layoutRaw: true, allowFutureImage: true } }
}

module.exports = nextConfig
