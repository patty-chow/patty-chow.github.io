/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true,
  },
  // Ensure images are unoptimized for static export
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig