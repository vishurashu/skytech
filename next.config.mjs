/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime"],
  experimental: {
    esmExternals: "loose",
  },
};

export default nextConfig;
