/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  images: {
    unoptimized: true,
  },
  basePath: '/patty-chow.github.io',
  assetPrefix: '/patty-chow.github.io/',
}

module.exports = nextConfig