import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { ActionProvider } from '@/context/ActionContext';
import { Toaster } from 'sonner';
import { Analytics } from '@vercel/analytics/react';
import ClientInitializer from '@/components/custom/ClientInitializer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Anon',
  description: 'Anon is a AI powered IDE to build dApps on Arweave',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
        >

          <ActionProvider>
          {children}

            <Toaster position="bottom-center" />
            <ClientInitializer />
            <Analytics />
          </ActionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
