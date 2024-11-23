/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Y-Z-z-Z.github.io', // 替换为您的仓库名
  images: {
    unoptimized: true
  },
  // 确保资源路径正确
  assetPrefix: '/Y-Z-z-Z.github.io/' // 替换为您的仓库名
}

module.exports = nextConfig