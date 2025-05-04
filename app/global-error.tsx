'use client';

import { useEffect } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error occurred:', error);
  }, [error]);

  return (
    <html className="dark" style={{ colorScheme: 'dark' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <div className="flex flex-col items-center justify-center min-h-[70vh] p-4 text-center">
          <div className="max-w-md w-full bg-card rounded-lg border border-border p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Something went wrong!
            </h2>
            <p className="text-muted-foreground mb-6">
              We&apos;re sorry, but there was an unexpected error. Our team has
              been notified.
            </p>
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
