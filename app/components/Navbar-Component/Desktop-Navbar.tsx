'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { pages } from '@/app/constant/Constant';
import { Button } from '@/components/ui/button';
import { MdOutlineCall } from 'react-icons/md';

export default function DesktopNavbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = pages.map((p) =>
      document.getElementById(p.href.replace('#', '')),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex w-full items-center justify-between">
      <div>
        <Link href="/">
          <Image
            src="/mon.png"
            alt="Logo"
            priority
            width={80}
            height={80}
            quality={60}
            className="h-auto w-16 md:w-20"
          />
        </Link>
      </div>

      <div className="hidden items-center gap-3 md:flex">
        {pages.map((p, index) => {
          const Icon = p.icon;
          const isActive = activeSection === p.href;

          return (
            <Link key={index} href={p.href}>
              <Button
                variant="ghost"
                className={`font-medium transition-all duration-300 ${
                  isActive
                    ? 'scale-105 bg-orange-700 text-white'
                    : 'text-gray-700 hover:text-orange-400'
                }`}
              >
                <Icon /> {p.name}
              </Button>
            </Link>
          );
        })}
      </div>

      <Link href="#Contact">
        <Button
          variant="outline"
          className="border-orange-300 text-orange-700 hover:bg-orange-100"
        >
          <MdOutlineCall /> Contact Me
        </Button>
      </Link>
    </div>
  );
}
