'use client';

import dynamic from 'next/dynamic';

const FullLanding = dynamic(() => import('@/components/landing/FullLanding'), {
  ssr: false,
});

export default function Home() {
  return <FullLanding />;
}
