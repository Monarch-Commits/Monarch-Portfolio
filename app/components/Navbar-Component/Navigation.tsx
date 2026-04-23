'use client';

import { useEffect, useRef, useState } from 'react';
import DesktopNavbar from './Desktop-Navbar';
import MobileNavbar from './Mobile-Navbar';

export function Navigation() {
  const [show, setShow] = useState(true);

  const lastScrollY = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const HERO_HEIGHT = 300;
  const SCROLL_THRESHOLD = 5;

  useEffect(() => {
    const clearIdle = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = Math.abs(currentY - lastScrollY.current);

      if (delta < SCROLL_THRESHOLD) return;

      const scrollingUp = currentY < lastScrollY.current;

      if (currentY < HERO_HEIGHT) {
        setShow(true);
        clearIdle();
        lastScrollY.current = currentY;
        return;
      }

      if (scrollingUp) {
        setShow(true);
        clearIdle();
      }

      if (!scrollingUp) {
        clearIdle();

        timeoutRef.current = setTimeout(() => {
          setShow(false);
        }, 2000);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearIdle();
    };
  }, []);

  return (
    <div
      className={`fixed top-2 z-40 mx-auto flex w-full max-w-6xl gap-3 border-b border-orange-300 p-2 backdrop-blur transition-all duration-300 sm:w-[90%] md:w-[85%] md:p-3 lg:w-full ${
        show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
}
