'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamic import ng FireflySwarm, no SSR
const FireflySwarm = dynamic(() => import('./FireflySwarm'), { ssr: false });

export default function FireflyWrapper() {
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      setWindowWidth(window.innerWidth);
    }, 0);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Tailwind sm breakpoint = 640px
  if (!mounted || windowWidth < 640) return null;

  return <FireflySwarm />;
}
