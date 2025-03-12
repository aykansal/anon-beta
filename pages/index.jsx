import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate processing
      router.push(`/projects?prompt=${encodeURIComponent(prompt)}`);
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background dark relative overflow-hidden">
      {/* Morse Code Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="morse-pattern opacity-5"></div>
      </div>

      <Head>
        <title>VYBE AI - Project Generator</title>
        <meta name="description" content="Generate coding projects with VYBE AI" />
        <link rel="icon" href="/favicon.ico" />
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 text-primary tracking-tight morse-title relative">
            VYBE AI
            <span className="absolute -right-6 top-0 text-xs text-primary/60 morse-blink">_</span>
          </h1>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <span className="morse-dot animate-morse-3"></span>
            <span className="morse-dash animate-morse-2"></span>
            <span className="morse-dot animate-morse-1"></span>
            <span className="morse-dash animate-morse-2"></span>
          </div>
        </div>

        {/* Prompt Section with Moving Border Light */}
        <div className="w-full max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <div className="moving-border"></div>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Describe your project idea... (Shift+Enter to submit)"
                className="w-full p-4 h-20 bg-card text-card-foreground rounded-lg resize-none border-none outline-none relative z-10"
                required
                aria-label="Project idea input"
              />
              
              {/* Morse Code Corner Indicators */}
              <div className="absolute top-2 right-2 flex space-x-1 opacity-40 z-20">
                <span className="h-1 w-1 bg-primary rounded-full"></span>
                <span className="h-1 w-3 bg-primary rounded-full"></span>
              </div>
              <div className="absolute bottom-2 left-2 flex space-x-1 opacity-40 z-20">
                <span className="h-1 w-3 bg-primary rounded-full"></span>
                <span className="h-1 w-1 bg-primary rounded-full"></span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-mono rounded-lg hover:bg-primary/90 transition-all duration-300 outline-none relative ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
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
                <span className="flex items-center">
                  <span className="mr-2">•—•</span>
                  Generate Project
                </span>
              )}
            </button>
          </form>
        </div>

        {/* Info Tag */}
        <div className="mt-12 text-xs text-muted-foreground flex items-center space-x-2 animate-fade-in delay-400">
          <span className="px-2 py-1 bg-secondary rounded-full font-mono tracking-wider border-none">• • •—• • •</span>
          <span>✨ Signal Processing</span>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-3 border-t border-primary/20 bg-primary/5 relative z-10">
        <div className="text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} VYBE AI - <span className="font-mono tracking-wider">• • — • •</span> the right vibe
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes morseBlink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes morseDot {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; scale: 1.2; }
        }
        @keyframes morseDash {
          0%, 100% { opacity: 0.2; width: 20px; }
          50% { opacity: 1; width: 24px; }
        }
        @keyframes morseSignalButton {
          0%, 100% { box-shadow: 0 0 0 rgba(140, 255, 140, 0); }
          50% { box-shadow: 0 0 15px rgba(140, 255, 140, 0.3); }
        }
        @keyframes morseSignalLine {
          0% { background: linear-gradient(90deg, transparent 0%, hsl(var(--primary)) 50%, transparent 100%); background-size: 200% 100%; background-position: 100% 0; }
          100% { background: linear-gradient(90deg, transparent 0%, hsl(var(--primary)) 50%, transparent 100%); background-size: 200% 100%; background-position: 0% 0; }
        }
        @keyframes morseTransmission {
          0%, 100% { opacity: 0; }
          5%, 10% { opacity: 0.3; }
          15%, 20% { opacity: 0; }
          25%, 30% { opacity: 0.3; }
          35%, 40% { opacity: 0; }
          55%, 65% { opacity: 0.3; }
          70%, 100% { opacity: 0; }
        }
        @keyframes letterFade {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.8s ease-out forwards; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        
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
        .animate-morse-1 { animation: morseDot 1.5s infinite; }
        .animate-morse-2 { animation: morseDash 1.5s infinite; animation-delay: 0.2s; }
        .animate-morse-3 { animation: morseDot 1.5s infinite; animation-delay: 0.4s; }
        
        .morse-blink { animation: morseBlink 1s infinite; }
        .morse-signal-button { animation: morseSignalButton 2s infinite; }
        .morse-signal-line { animation: morseSignalLine 2s infinite; }
        
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
          background: repeating-linear-gradient(90deg, transparent, transparent 2px, hsl(var(--primary)) 2px, hsl(var(--primary)) 4px, transparent 4px, transparent 8px);
        }
        
        .morse-container::after {
          content: '';
          position: absolute;
          bottom: -4px;
          right: 10px;
          width: 30px;
          height: 4px;
          background: repeating-linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary)) 2px, transparent 2px, transparent 6px);
        }
        
        .morse-letter {
          font-size: 0.6em;
          vertical-align: super;
          opacity: 0.6;
          margin-right: 0.5rem;
          animation: letterFade 2s infinite;
          animation-delay: calc(var(--index, 0) * 0.5s);
        }
        
        .morse-letter:nth-child(1) { --index: 0; }
        .morse-letter:nth-child(2) { --index: 1; }
        .morse-letter:nth-child(3) { --index: 2; }
        .morse-letter:nth-child(4) { --index: 3; }

        .moving-border {
          position: absolute;
          inset: 0;
          border-radius: 8px;
          padding: 2px;
          background: linear-gradient(90deg, 
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
      `}</style>
    </div>
  );
}