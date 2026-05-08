/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  
  outputFileTracingRoot: process.cwd(),
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
