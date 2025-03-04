/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
    BACKEND_URL: 'https://bbe4-2409-40d1-1a-7ecd-85bf-5c62-fb5f-527.ngrok-free.app',
  },
};

export default nextConfig;
