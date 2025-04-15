'use client';

import Head from 'next/head';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

// Dynamically import FullLanding to avoid SSR issues
const FullLanding = dynamic(() => import('./Landing/Components/FullLanding'), {
  ssr: false,
});

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();
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

  // @ts-expect-error - event type not defined strictly here for simplicity
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      router.push(`/projects?prompt=${encodeURIComponent(prompt)}`);
      setIsLoading(false);
    }
  };

  // @ts-expect-error - using generic event to catch keyboard shortcut
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return <FullLanding />;
}
