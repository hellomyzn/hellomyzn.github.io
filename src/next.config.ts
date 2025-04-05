/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/hellomyzn.github.io",
  assetPrefix: "/hellomyzn.github.io",
  distDir: "../docs",
};

export default nextConfig;
