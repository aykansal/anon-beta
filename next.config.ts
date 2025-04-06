// next.config.ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  reactStrictMode: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_BACKEND_URL: 'http://localhost:5000', 
    NEXT_PUBLIC_FRONTEND_URL: 'https://anon-beta.vercel.app',
    // NEXT_PUBLIC_BACKEND_URL: 'https://vybeide-be.onrender.com',
  },
};

export default nextConfig;