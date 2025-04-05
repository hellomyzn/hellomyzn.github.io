/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/hellomyzn.github.io/docs",
  assetPrefix: "/hellomyzn.github.io/docs",
  distDir: "../docs",
};

export default nextConfig;
