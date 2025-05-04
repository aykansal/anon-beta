'use client';

import Head from 'next/head';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    if (email.trim()) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subscribe`,
          { email }
        );
        if (response.status === 208) {
          toast.error('Email already subscribed.');
          return;
        }
        toast.success('Subscribed successfully!');
      } catch (error) {
        console.error('Error subscribing:', error);
        toast.error('Error subscribing. Please try again.');
      } finally {
        setEmail('');
      }
    } else {
      toast.error('Please enter an email address.');
    }
  };
  //@ts-expect-error iugnore
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate processing
      router.push(`/projects?prompt=${encodeURIComponent(prompt)}`);
      setIsLoading(false);
    }
  };

  //@ts-expect-error iugnore
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background dark relative overflow-hidden">
      {/* Rich Interactive Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="morse-pattern opacity-5"></div>
        <div className="particle-overlay"></div>
        <div className="grid-lines"></div>
        <div className="tech-circles"></div>
        <div className="floating-elements"></div>
        <div className="glow-effect"></div>
      </div>

      <Head>
        <title>VYBE AI - Project Generator</title>
        <meta
          name="description"
          content="Generate coding projects with VYBE AI"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        /> */}
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-8 md:px-20 text-center z-10">
        {/* Header Section with Morse Code Animation */}
        <div className="mb-10 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="morse-dot animate-morse-1"></span>
            <span className="morse-dash animate-morse-2"></span>
            <span className="morse-dot animate-morse-3"></span>
            <span className="morse-dash animate-morse-1"></span>
          </div>
          <div className="relative">
            <div className="header-glow"></div>
            <div className="logo-container">
              {/* <svg
                width="280"
                height="80"
                viewBox="0 0 280 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="logo-svg"
              >
                <path
                  d="M10 40 Q70 20, 140 40 T270 40"
                  className="signal-wave-path"
                  strokeDasharray="4 6"
                />
                <path
                  d="M10 40 Q70 60, 140 40 T270 40"
                  className="signal-wave-path-2"
                  strokeDasharray="4 6"
                />
                
                <path
                  d="M40 15L60 65L80 15"
                  className="letter-path"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                <path
                  d="M90 15L110 40L130 15M110 40L110 65"
                  className="letter-path"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                <path
                  d="M140 15V65M140 15H160Q175 15 175 27.5T160 40H140M140 40H165Q180 40 180 52.5T165 65H140"
                  className="letter-path"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                <path
                  d="M190 15V65M190 15H225M190 40H220M190 65H225"
                  className="letter-path"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <circle cx="240" cy="40" r="3" className="morse-dot-1" />
                <circle cx="250" cy="40" r="3" className="morse-dot-2" />
                <circle cx="260" cy="40" r="3" className="morse-dot-3" />
              </svg> */}
              <span className="text-6xl font-bold text-primary">ANON</span>
            </div>
          </div>
        </div>

        {/* Prompt Section with Enhanced Visual Elements */}
        <div className="w-full max-w-2xl relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 tech-decoration"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 tech-decoration-2"></div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <div className="moving-border"></div>
              <div className="pulse-ring"></div>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Describe your project idea... (Shift+Enter to submit)"
                className="w-full p-4 h-20 bg-card/80 backdrop-blur-xs text-card-foreground rounded-lg resize-none border-none outline-hidden relative z-10"
                required
                aria-label="Project idea input"
              />

              {/* Enhanced Corner Indicators */}
              <div className="absolute top-2 right-2 flex space-x-1 opacity-40 z-20">
                <span className="h-1 w-1 bg-primary rounded-full pulse-dot"></span>
                <span className="h-1 w-3 bg-primary rounded-full"></span>
              </div>
              <div className="absolute bottom-2 left-2 flex space-x-1 opacity-40 z-20">
                <span className="h-1 w-3 bg-primary rounded-full"></span>
                <span className="h-1 w-1 bg-primary rounded-full pulse-dot"></span>
              </div>

              {/* Tech Decorations */}
              <div className="tech-brackets"></div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-mono rounded-lg hover:bg-primary/90 transition-all duration-300 outline-hidden relative flex items-center justify-center gap-2 ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              } button-glow`}
              aria-label="Generate project button"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-primary-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
                    ></path>
                  </svg>
                  Transmitting...
                </span>
              ) : (
                <>
                  <span className="flex items-center">
                    <span className="mr-2">•—•</span>
                    Generate Project
                  </span>
                  <span className="text-primary-foreground/50 text-xs border border-primary-foreground/20 rounded px-1 ml-1 hidden sm:inline-flex items-center">
                    <span className="mr-1">⇧</span>
                    <span>↵</span>
                  </span>
                </>
              )}
            </button>
          </form>
        </div>
      </main>

      {/* Enhanced Footer */}
      <Footer
        theme={theme}
        mounted={mounted}
        setTheme={setTheme}
        email={email}
        setEmail={setEmail}
        handleSubscribe={handleSubscribe}
      />

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes morseBlink {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes morseDot {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
            scale: 1.2;
          }
        }
        @keyframes morseDash {
          0%,
          100% {
            opacity: 0.2;
            width: 20px;
          }
          50% {
            opacity: 1;
            width: 24px;
          }
        }
        @keyframes morseSignalButton {
          0%,
          100% {
            box-shadow: 0 0 0 rgba(140, 255, 140, 0);
          }
          50% {
            box-shadow: 0 0 15px rgba(140, 255, 140, 0.3);
          }
        }
        @keyframes morseSignalLine {
          0% {
            background: linear-gradient(
              90deg,
              transparent 0%,
              hsl(var(--primary)) 50%,
              transparent 100%
            );
            background-size: 200% 100%;
            background-position: 100% 0;
          }
          100% {
            background: linear-gradient(
              90deg,
              transparent 0%,
              hsl(var(--primary)) 50%,
              transparent 100%
            );
            background-size: 200% 100%;
            background-position: 0% 0;
          }
        }
        @keyframes morseTransmission {
          0%,
          100% {
            opacity: 0;
          }
          5%,
          10% {
            opacity: 0.3;
          }
          15%,
          20% {
            opacity: 0;
          }
          25%,
          30% {
            opacity: 0.3;
          }
          35%,
          40% {
            opacity: 0;
          }
          55%,
          65% {
            opacity: 0.3;
          }
          70%,
          100% {
            opacity: 0;
          }
        }
        @keyframes letterFade {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        @keyframes particleFloat {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-5px) translateX(5px);
          }
          50% {
            transform: translateY(-10px) translateX(0);
          }
          75% {
            transform: translateY(-5px) translateX(-5px);
          }
        }
        @keyframes buttonGlow {
          0%,
          100% {
            box-shadow:
              0 0 5px 0 rgba(var(--primary-rgb), 0.3),
              0 0 10px 0 rgba(var(--primary-rgb), 0.1);
          }
          50% {
            box-shadow:
              0 0 10px 2px rgba(var(--primary-rgb), 0.5),
              0 0 20px 5px rgba(var(--primary-rgb), 0.2);
          }
        }
        @keyframes pulseDot {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
        @keyframes rotateElement {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes floatElement {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes pulseRing {
          0% {
            transform: scale(0.8);
            opacity: 0.3;
          }
          50% {
            transform: scale(1);
            opacity: 0.1;
          }
          100% {
            transform: scale(0.8);
            opacity: 0.3;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }

        .morse-dot {
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: hsl(var(--primary));
        }
        .morse-dash {
          display: block;
          width: 20px;
          height: 8px;
          border-radius: 4px;
          background-color: hsl(var(--primary));
        }
        .animate-morse-1 {
          animation: morseDot 1.5s infinite;
        }
        .animate-morse-2 {
          animation: morseDash 1.5s infinite;
          animation-delay: 0.2s;
        }
        .animate-morse-3 {
          animation: morseDot 1.5s infinite;
          animation-delay: 0.4s;
        }

        .morse-blink {
          animation: morseBlink 1s infinite;
        }
        .morse-signal-button {
          animation: morseSignalButton 2s infinite;
        }
        .morse-signal-line {
          animation: morseSignalLine 2s infinite;
        }

        .morse-pattern {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .morse-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 40%;
          height: 1px;
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            hsl(var(--primary)) 2px,
            hsl(var(--primary)) 4px,
            transparent 4px,
            transparent 8px
          );
        }

        .morse-container::after {
          content: '';
          position: absolute;
          bottom: -4px;
          right: 10px;
          width: 30px;
          height: 4px;
          background: repeating-linear-gradient(
            90deg,
            hsl(var(--primary)),
            hsl(var(--primary)) 2px,
            transparent 2px,
            transparent 6px
          );
        }

        .morse-letter {
          font-size: 0.6em;
          vertical-align: super;
          opacity: 0.6;
          margin-right: 0.5rem;
          animation: letterFade 2s infinite;
          animation-delay: calc(var(--index, 0) * 0.5s);
        }

        .morse-letter:nth-child(1) {
          --index: 0;
        }
        .morse-letter:nth-child(2) {
          --index: 1;
        }
        .morse-letter:nth-child(3) {
          --index: 2;
        }
        .morse-letter:nth-child(4) {
          --index: 3;
        }

        .moving-border {
          position: absolute;
          inset: 0;
          border-radius: 8px;
          padding: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            transparent,
            hsl(var(--primary)),
            transparent,
            transparent
          );
          background-size: 200% 100%;
          animation: movingBorder 3s linear infinite;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        @keyframes movingBorder {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        /* Enhanced premium styles */
        .particle-overlay {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(
              circle at 20% 30%,
              rgba(var(--primary-rgb), 0.08) 0%,
              transparent 8%
            ),
            radial-gradient(
              circle at 80% 20%,
              rgba(var(--primary-rgb), 0.08) 0%,
              transparent 10%
            ),
            radial-gradient(
              circle at 40% 70%,
              rgba(var(--primary-rgb), 0.08) 0%,
              transparent 12%
            ),
            radial-gradient(
              circle at 70% 60%,
              rgba(var(--primary-rgb), 0.08) 0%,
              transparent 6%
            );
          animation: particleFloat 15s ease-in-out infinite;
        }

        .grid-lines {
          position: absolute;
          inset: 0;
          background-size: 40px 40px;
          background-image:
            linear-gradient(
              to right,
              rgba(var(--primary-rgb), 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(var(--primary-rgb), 0.03) 1px,
              transparent 1px
            );
          opacity: 0.5;
        }

        .tech-circles {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .tech-circles::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background:
            radial-gradient(
              circle at center,
              transparent 60%,
              rgba(var(--primary-rgb), 0.03) 60%,
              rgba(var(--primary-rgb), 0.03) 62%,
              transparent 62%
            ),
            radial-gradient(
              circle at center,
              transparent 70%,
              rgba(var(--primary-rgb), 0.03) 70%,
              rgba(var(--primary-rgb), 0.03) 72%,
              transparent 72%
            );
          background-size: 100px 100px;
          animation: rotateElement 120s linear infinite;
        }

        .floating-elements {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .floating-elements::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-image:
            radial-gradient(
              circle at 10% 10%,
              rgba(var(--primary-rgb), 0.05) 0%,
              rgba(var(--primary-rgb), 0.05) 1%,
              transparent 1%
            ),
            radial-gradient(
              circle at 90% 20%,
              rgba(var(--primary-rgb), 0.05) 0%,
              rgba(var(--primary-rgb), 0.05) 1%,
              transparent 1%
            ),
            radial-gradient(
              circle at 30% 80%,
              rgba(var(--primary-rgb), 0.05) 0%,
              rgba(var(--primary-rgb), 0.05) 1%,
              transparent 1%
            ),
            radial-gradient(
              circle at 70% 40%,
              rgba(var(--primary-rgb), 0.05) 0%,
              rgba(var(--primary-rgb), 0.05) 1%,
              transparent 1%
            ),
            radial-gradient(
              circle at 20% 30%,
              rgba(var(--primary-rgb), 0.05) 0%,
              rgba(var(--primary-rgb), 0.05) 1%,
              transparent 1%
            ),
            radial-gradient(
              circle at 80% 90%,
              rgba(var(--primary-rgb), 0.05) 0%,
              rgba(var(--primary-rgb), 0.05) 1%,
              transparent 1%
            );
          background-size: 120px 120px;
          animation: floatElement 20s ease-in-out infinite;
        }

        .glow-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(
              circle at 30% 20%,
              rgba(var(--primary-rgb), 0.1) 0%,
              transparent 25%
            ),
            radial-gradient(
              circle at 70% 60%,
              rgba(var(--primary-rgb), 0.08) 0%,
              transparent 25%
            );
          filter: blur(40px);
          opacity: 0.6;
        }

        .header-glow {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 200px;
          background: radial-gradient(
            circle,
            rgba(var(--primary-rgb), 0.15) 0%,
            transparent 70%
          );
          filter: blur(20px);
          z-index: -1;
        }

        .button-glow {
          animation: buttonGlow 3s ease-in-out infinite;
        }

        .premium-badge {
          display: inline-flex;
          position: relative;
          padding: 2px;
          border-radius: 30px;
          background: linear-gradient(
            135deg,
            rgba(var(--primary-rgb), 0.5),
            rgba(var(--primary-rgb), 0.1)
          );
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .premium-badge-inner {
          display: flex;
          align-items: center;
          padding: 6px 16px;
          border-radius: 28px;
          background: rgba(var(--card-rgb), 0.8);
          backdrop-filter: blur(5px);
        }

        .premium-badge-text {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: hsl(var(--foreground));
        }

        .morse-symbol {
          font-family: monospace;
          color: hsl(var(--primary));
          margin-right: 8px;
          letter-spacing: 1px;
        }

        .premium-badge-divider {
          width: 1px;
          height: 14px;
          background: linear-gradient(
            to bottom,
            transparent,
            hsl(var(--primary)),
            transparent
          );
          margin: 0 8px;
        }

        .premium-badge-label {
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .footer-gradient {
          background: linear-gradient(
            to top,
            rgba(var(--background-rgb), 1),
            rgba(var(--background-rgb), 0.8)
          );
          border-top: 1px solid rgba(var(--primary-rgb), 0.1);
          backdrop-filter: blur(10px);
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          color: hsl(var(--muted-foreground));
          background: rgba(var(--primary-rgb), 0.05);
          transition: all 0.2s ease;
        }

        .social-link:hover {
          color: hsl(var(--primary));
          background: rgba(var(--primary-rgb), 0.1);
          transform: translateY(-2px);
        }

        .pulse-dot {
          animation: pulseDot 2s infinite;
        }

        .tech-decoration {
          position: absolute;
          border: 1px dashed rgba(var(--primary-rgb), 0.2);
          border-radius: 50%;
          opacity: 0.6;
          animation: rotateElement 30s linear infinite;
        }

        .tech-decoration::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 6px;
          height: 6px;
          background-color: rgba(var(--primary-rgb), 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .tech-decoration-2 {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px dashed rgba(var(--primary-rgb), 0.2);
          border-radius: 30%;
          opacity: 0.6;
          animation: rotateElement 20s linear infinite reverse;
        }

        .tech-brackets {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          pointer-events: none;
          z-index: 1;
        }

        .tech-brackets::before,
        .tech-brackets::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          border: 1px solid rgba(var(--primary-rgb), 0.2);
          opacity: 0.6;
        }

        .tech-brackets::before {
          top: 0;
          left: 0;
          border-right: none;
          border-bottom: none;
        }

        .tech-brackets::after {
          bottom: 0;
          right: 0;
          border-left: none;
          border-top: none;
        }

        .pulse-ring {
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border-radius: 12px;
          border: 1px solid rgba(var(--primary-rgb), 0.1);
          z-index: 0;
          animation: pulseRing 4s infinite;
        }

        /* Font Integration */
        body {
          font-family:
            'Outfit',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            'Open Sans',
            'Helvetica Neue',
            sans-serif;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        .font-heading {
          font-family: 'Outfit', sans-serif;
          letter-spacing: -0.02em;
        }

        .font-mono,
        code,
        pre,
        .morse-symbol,
        button {
          font-family: 'Space Mono', monospace;
        }

        /* Redesigned Signal Processing Badge */
        .signal-processor-badge {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 4px;
          border-radius: 16px;
          background: linear-gradient(
            135deg,
            rgba(var(--primary-rgb), 0.8) 0%,
            rgba(var(--primary-rgb), 0.2) 50%,
            rgba(var(--primary-rgb), 0.05) 100%
          );
          box-shadow:
            0 10px 25px -5px rgba(0, 0, 0, 0.1),
            0 8px 10px -6px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(var(--primary-rgb), 0.3) inset;
          backdrop-filter: blur(16px);
          overflow: hidden;
        }

        .signal-badge-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 30% 50%,
            rgba(var(--primary-rgb), 0.4) 0%,
            transparent 70%
          );
          opacity: 0.6;
          filter: blur(20px);
          z-index: 0;
          animation: rotateBadgeGlow 8s linear infinite;
        }

        @keyframes rotateBadgeGlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .signal-badge-content {
          position: relative;
          display: flex;
          align-items: center;
          padding: 8px 16px;
          border-radius: 12px;
          background: rgba(var(--background-rgb), 0.85);
          z-index: 1;
        }

        .signal-badge-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(var(--primary-rgb), 0.1);
          margin-right: 12px;
          position: relative;
          overflow: hidden;
        }

        .signal-wave {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .signal-wave span {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(var(--primary-rgb), 0.5);
          animation: signalWave 3s ease-out infinite;
        }

        .signal-wave span:nth-child(1) {
          width: 10px;
          height: 10px;
          animation-delay: 0s;
        }

        .signal-wave span:nth-child(2) {
          width: 20px;
          height: 20px;
          animation-delay: 0.3s;
        }

        .signal-wave span:nth-child(3) {
          width: 30px;
          height: 30px;
          animation-delay: 0.6s;
        }

        @keyframes signalWave {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        .signal-badge-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .signal-badge-morse {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          color: rgba(var(--primary-rgb), 0.8);
          letter-spacing: 1px;
          margin-bottom: 2px;
        }

        .signal-badge-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 14px;
          color: hsl(var(--foreground));
          letter-spacing: 0.02em;
          position: relative;
        }

        .signal-badge-title::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            to right,
            rgba(var(--primary-rgb), 0.8),
            rgba(var(--primary-rgb), 0.1)
          );
        }

        /* Theme Switcher Button */
        .theme-switch-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          color: hsl(var(--muted-foreground));
          background: rgba(var(--primary-rgb), 0.05);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .theme-switch-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            rgba(var(--primary-rgb), 0.1) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .theme-switch-btn:hover {
          color: hsl(var(--primary));
          background: rgba(var(--primary-rgb), 0.1);
          transform: translateY(-2px);
        }

        .theme-switch-btn:hover::before {
          opacity: 1;
        }

        .theme-switch-btn svg {
          transition: transform 0.3s ease;
        }

        .theme-switch-btn:hover svg {
          transform: rotate(15deg);
        }

        /* Light Theme Enhancements */
        :root {
          --primary-rgb: 46, 171, 102;
          --background-rgb: 252, 250, 245;
          --card-rgb: 253, 251, 247;
          --warm-rgb: 180, 160, 140;
        }

        /* Enhanced Light Theme Background */
        .light .morse-pattern {
          opacity: 0.025;
          filter: sepia(15%);
        }

        .light .particle-overlay {
          background-image:
            radial-gradient(
              circle at 20% 30%,
              rgba(var(--warm-rgb), 0.06) 0%,
              transparent 8%
            ),
            radial-gradient(
              circle at 80% 20%,
              rgba(var(--warm-rgb), 0.06) 0%,
              transparent 10%
            ),
            radial-gradient(
              circle at 40% 70%,
              rgba(var(--warm-rgb), 0.06) 0%,
              transparent 12%
            ),
            radial-gradient(
              circle at 70% 60%,
              rgba(var(--warm-rgb), 0.06) 0%,
              transparent 6%
            );
          filter: sepia(10%);
        }

        .light .grid-lines {
          opacity: 0.2;
          background-image:
            linear-gradient(
              to right,
              rgba(var(--warm-rgb), 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(var(--warm-rgb), 0.08) 1px,
              transparent 1px
            );
        }

        .light .tech-circles::before {
          opacity: 0.3;
          background:
            radial-gradient(
              circle at center,
              transparent 60%,
              rgba(var(--warm-rgb), 0.06) 60%,
              rgba(var(--warm-rgb), 0.06) 62%,
              transparent 62%
            ),
            radial-gradient(
              circle at center,
              transparent 70%,
              rgba(var(--warm-rgb), 0.06) 70%,
              rgba(var(--warm-rgb), 0.06) 72%,
              transparent 72%
            );
          filter: sepia(10%);
        }

        .light .floating-elements::before {
          opacity: 0.4;
          background-image:
            radial-gradient(
              circle at 10% 10%,
              rgba(var(--warm-rgb), 0.08) 0%,
              rgba(var(--warm-rgb), 0.08) 1%,
              transparent 1%
            ),
            radial-gradient(
              circle at 90% 20%,
              rgba(var(--warm-rgb), 0.08) 0%,
              rgba(var(--warm-rgb), 0.08) 1%,
              transparent 1%
            ),
            radial-gradient(
              circle at 30% 80%,
              rgba(var(--warm-rgb), 0.08) 0%,
              rgba(var(--warm-rgb), 0.08) 1%,
              transparent 1%
            ),
            radial-gradient(
              circle at 70% 40%,
              rgba(var(--warm-rgb), 0.08) 0%,
              rgba(var(--warm-rgb), 0.08) 1%,
              transparent 1%
            );
          filter: sepia(10%);
        }

        .light .glow-effect {
          opacity: 0.2;
          background:
            radial-gradient(
              circle at 30% 20%,
              rgba(var(--warm-rgb), 0.15) 0%,
              transparent 25%
            ),
            radial-gradient(
              circle at 70% 60%,
              rgba(var(--warm-rgb), 0.12) 0%,
              transparent 25%
            );
          filter: blur(40px) sepia(10%);
        }

        .light .header-glow {
          opacity: 0.3;
          background: radial-gradient(
            circle,
            rgba(var(--warm-rgb), 0.2) 0%,
            transparent 70%
          );
          filter: blur(20px) sepia(10%);
        }

        .light .social-link {
          background: rgba(var(--warm-rgb), 0.08);
          color: rgba(20, 20, 20, 0.6);
        }

        .light .social-link:hover {
          background: rgba(var(--warm-rgb), 0.15);
          color: hsl(var(--primary));
        }

        .light .footer-gradient {
          background: linear-gradient(
            to top,
            rgba(var(--background-rgb), 1),
            rgba(var(--background-rgb), 0.95)
          );
          border-top: 1px solid rgba(var(--warm-rgb), 0.15);
        }

        .light .theme-switch-btn {
          background: rgba(var(--warm-rgb), 0.08);
          color: rgba(20, 20, 20, 0.6);
        }

        .light .theme-switch-btn:hover {
          background: rgba(var(--warm-rgb), 0.15);
          color: hsl(var(--primary));
        }

        .light .moving-border {
          background: linear-gradient(
            90deg,
            transparent,
            transparent,
            rgba(var(--warm-rgb), 0.3),
            transparent,
            transparent
          );
        }

        .light .pulse-ring {
          border-color: rgba(var(--warm-rgb), 0.15);
        }

        .light .tech-decoration,
        .light .tech-decoration-2 {
          border-color: rgba(var(--warm-rgb), 0.2);
        }

        .light .tech-decoration::before {
          background-color: rgba(var(--warm-rgb), 0.3);
        }

        .light .tech-brackets::before,
        .light .tech-brackets::after {
          border-color: rgba(var(--warm-rgb), 0.2);
        }

        /* Dark Theme Refinements */
        .dark {
          --primary-rgb: 140, 255, 140;
          --background-rgb: 18, 18, 18;
          --card-rgb: 24, 24, 24;
        }

        .logo-container {
          position: relative;
          width: 280px;
          height: 80px;
          margin: 0 auto;
        }

        .logo-svg {
          width: 100%;
          height: 100%;
        }

        .signal-wave-path,
        .signal-wave-path-2 {
          fill: none;
          stroke: hsl(var(--primary));
          stroke-width: 1;
          opacity: 0.3;
          animation: waveFlow 3s linear infinite;
        }

        .signal-wave-path-2 {
          animation-delay: -1.5s;
        }

        .letter-path {
          fill: none;
          stroke: hsl(var(--primary));
          stroke-width: 4;
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: drawLetter 2s ease forwards;
        }

        .morse-dot-1,
        .morse-dot-2,
        .morse-dot-3 {
          fill: hsl(var(--primary));
          opacity: 0;
          animation: fadeInDot 0.5s ease forwards;
        }

        .morse-dot-1 {
          animation-delay: 2s;
        }
        .morse-dot-2 {
          animation-delay: 2.2s;
        }
        .morse-dot-3 {
          animation-delay: 2.4s;
        }

        @keyframes waveFlow {
          0% {
            stroke-dashoffset: 20;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes drawLetter {
          0% {
            stroke-dashoffset: 200;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeInDot {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          60% {
            opacity: 1;
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Light theme adjustments */
        :global(.light) .signal-wave-path,
        :global(.light) .signal-wave-path-2 {
          stroke: rgba(var(--warm-rgb), 0.3);
        }

        :global(.light) .letter-path {
          stroke: hsl(var(--primary));
        }

        :global(.light) .morse-dot-1,
        :global(.light) .morse-dot-2,
        :global(.light) .morse-dot-3 {
          fill: hsl(var(--primary));
        }

        /* Add a subtle glow effect */
        .logo-svg {
          filter: drop-shadow(0 0 8px rgba(var(--primary-rgb), 0.2));
        }

        /* Hover effect */
        .logo-container:hover .signal-wave-path,
        .logo-container:hover .signal-wave-path-2 {
          opacity: 0.5;
        }

        .logo-container:hover .letter-path {
          stroke-width: 4.5;
        }

        .logo-container:hover .morse-dot-1,
        .logo-container:hover .morse-dot-2,
        .logo-container:hover .morse-dot-3 {
          transform: scale(1.2);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
}
