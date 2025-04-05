/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  distDir: "../docs",
  basePath: "",
  assetPrefix: "",
};

export default nextConfig;
