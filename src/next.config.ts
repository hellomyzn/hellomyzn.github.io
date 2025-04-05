/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/docs",
  assetPrefix: "/docs",
  distDir: "../docs",
};

export default nextConfig;
