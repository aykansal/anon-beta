'use client';
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
        <meta
          name="description"
          content="Join our waitlist to get early access."
        />
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
            <span
              className="absolute inset-[-1px] rounded-full bg-linear-to-r from-transparent via-orange-400/50 to-transparent"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.5), transparent)',
                backgroundSize: '200% 100%',
                animation: 'borderGlow 2s linear infinite',
              }}
            />
          </span>
          <span className="flex items-center gap-2 relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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
          <h2 className="text-white text-3xl font-bold mb-4 text-center">
            Join our waitlist!
          </h2>
          <p className="text-gray-300 text-center mb-8">
            Sign up for our newsletter to receive the latest updates and
            insights straight to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4"
          >
            {/* Email input with revolving border effect - perimeter only */}
            <div className="flex-1 relative">
              <div className="absolute inset-0 rounded-full">
                <div
                  className="absolute inset-[-1px] rounded-full bg-linear-to-r from-transparent via-orange-400/50 to-transparent"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.5), transparent)',
                    backgroundSize: '200% 100%',
                    animation: 'borderGlow 2s linear infinite',
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
      </main>

      {/* Large watermark */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.05]">
        <h1 className="text-white text-[300px] font-black tracking-wide transform translate-y-[163px] text-center">
          Waitlist
        </h1>
      </div>
    </div>
  );
};

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

const StyleTag = () => (
  <style jsx global>
    {styles}
  </style>
);

const WaitlistNewWithStyles = () => (
  <>
    <StyleTag />
    <WaitlistNew />
  </>
);

export default WaitlistNewWithStyles;
