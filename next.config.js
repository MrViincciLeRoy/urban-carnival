/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/rare-flora-blog' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/rare-flora-blog' : '',
}

module.exports = nextConfig