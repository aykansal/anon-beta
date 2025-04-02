"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

const WaitlistNew = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your waitlist submission logic here
    console.log('Email submitted:', email);
    // Reset field after submission
    setEmail('');
  };

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center">
      <Head>
        <title>Coming Soon | Join our Waitlist</title>
        <meta name="description" content="Join our waitlist to get early access." />
      </Head>
      
      {/* Background effects - increased intensity */}
      <div className="absolute w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] rounded-full bg-orange-500/30 blur-[120px]" />
        <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] rounded-full bg-orange-400/20 blur-[150px]" />
      </div>
      
      {/* Waitlist button in header - repositioned and added glow effect */}
      <div className="absolute top-1/4 transform -translate-y-24 z-10">
        <motion.button 
          className="relative px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-white overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated border glow effect - perimeter only */}
          <span className="absolute inset-0 rounded-full border border-transparent">
            <span className="absolute inset-[-1px] rounded-full bg-linear-to-r from-transparent via-orange-400/50 to-transparent" 
                  style={{ 
                    background: 'linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.5), transparent)',
                    backgroundSize: '200% 100%',
                    animation: 'borderGlow 2s linear infinite'
                  }} 
            />
          </span>
          <span className="flex items-center gap-2 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12h14"></path>
            </svg>
            Waitlist
          </span>
        </motion.button>
      </div>
      
      {/* Main content */}
      <main className="relative z-10 w-full max-w-(--breakpoint-xl) px-4 flex flex-col items-center">
        {/* Coming soon text - made shorter */}
        <motion.h1 
          className="text-white text-6xl md:text-7xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Coming soon!
        </motion.h1>
        
        {/* Glass card - increased morphism intensity */}
        <motion.div 
          className="w-full max-w-xl bg-black/40 backdrop-blur-2xl rounded-3xl p-10 border border-gray-500/40"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-white text-3xl font-bold mb-4 text-center">Join our waitlist!</h2>
          <p className="text-gray-300 text-center mb-8">
            Sign up for our newsletter to receive the latest updates 
            and insights straight to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            {/* Email input with revolving border effect - perimeter only */}
            <div className="flex-1 relative">
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-[-1px] rounded-full bg-linear-to-r from-transparent via-orange-400/50 to-transparent" 
                      style={{ 
                        background: 'linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.5), transparent)',
                        backgroundSize: '200% 100%',
                        animation: 'borderGlow 2s linear infinite'
                      }} 
                />
              </div>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-5 py-3 bg-black/60 rounded-full text-white outline-hidden relative z-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="px-6 py-3 bg-white text-black font-semibold rounded-full"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Join Waitlist
            </motion.button>
          </form>
        </motion.div>
        
        {/* Social media links */}
        <div className="mt-10 flex gap-4">
          <SocialIcon platform="twitter" />
          <SocialIcon platform="facebook" />
          <SocialIcon platform="instagram" />
        </div>
      </main>
      
      {/* Large watermark */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.05]">
        <h1 className="text-white text-[300px] font-black tracking-wide transform translate-y-[163px] text-center">Waitlist</h1>
      </div>
      
      {/* Footer */}
      <footer className="absolute bottom-8 text-gray-500 text-sm flex items-center justify-center w-full space-x-2 z-10">
        <span>©2024 Waitlist Template</span>
        <span className="text-gray-600">•</span>
        <span>Built by <a href="#" className="hover:text-gray-300 transition-colors">Framer</a></span>
        <span className="text-gray-600">•</span>
        <span>404</span>
      </footer>
    </div>
  );
};

// Social icon component
const SocialIcon = ({ platform }: { platform: string }) => {
  const getIcon = () => {
    switch (platform) {
      case 'twitter':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case 'facebook':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
          </svg>
        );
      case 'instagram':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-md border border-gray-500/30 text-white"
      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      whileTap={{ scale: 0.9 }}
    >
      {getIcon()}
    </motion.a>
  );
};

// Update the global styles for the new border glow animation
const styles = `
@keyframes borderGlow {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 0%;
  }
}
`;

// Add the styles to the component
const StyleTag = () => (
  <style jsx global>{styles}</style>
);

// Update the component to include the styles
const WaitlistNewWithStyles = () => (
  <>
    <StyleTag />
    <WaitlistNew />
  </>
);

export default WaitlistNewWithStyles;
