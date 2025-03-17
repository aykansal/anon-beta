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
    // BACKEND_URL: 'http://localhost:5000'
    BACKEND_URL: 'https://vybeide-be.onrender.com'
  },
};

export default nextConfig;
