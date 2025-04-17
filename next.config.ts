// next.config.ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  reactStrictMode: false,
  experimental: {
    // Enable more SWC optimizations
    forceSwcTransforms: true,
  },
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
    // NEXT_PUBLIC_BACKEND_URL: 'http://localhost:5000', 
    NEXT_PUBLIC_FRONTEND_URL: 'https://anon-beta.vercel.app',
    NEXT_PUBLIC_BACKEND_URL: 'https://vybeide-be.onrender.com',
  },
  
  // Optimize webpack configuration for large modules
  webpack: (config, { isServer }) => {
    // Increase size limits for performance hints
    config.performance = {
      ...config.performance,
      maxAssetSize: 1000000, // 1MB
      maxEntrypointSize: 1000000, // 1MB
      hints: 'warning', // 'error' or false to disable
    };
    
    // Optimize chunk splitting strategy
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        maxSize: 500000, // 500kb
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          sandpack: {
            test: /[\\/]node_modules[\\/](@codesandbox\/sandpack)[\\/]/,
            name: 'sandpack-vendors',
            chunks: 'all',
            priority: 10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    };
    
    // Add additional entries to ModuleScopePlugin allowlist if needed
    if (!isServer) {
      // Client-side specific optimizations
      console.log('Optimizing client-side webpack config for large modules...');
    }
    
    return config;
  },
};

export default nextConfig;