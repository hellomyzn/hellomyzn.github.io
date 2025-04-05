/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  distDir: "../docs",
  basePath: "/hellomyzn.github.io",
  assetPrefix: "/hellomyzn.github.io",
};

export default nextConfig;
