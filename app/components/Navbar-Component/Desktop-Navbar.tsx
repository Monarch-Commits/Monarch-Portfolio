'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { pages } from '@/app/constant/Constant';
import { Button } from '@/components/ui/button';

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
        threshold: 0.6,
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
            src="https://drive.google.com/uc?export=view&id=1czPtHOnb06NAo-awhCgsOgO_uHXNEUVU"
            width={40}
            height={40}
            alt="Logo"
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
                    ? 'scale-105 bg-orange-500 text-white'
                    : 'text-gray-500 hover:text-orange-400'
                }`}
              >
                <Icon /> {p.name}
              </Button>
            </Link>
          );
        })}
      </div>

      <Link href="#Projects">
        <Button variant="secondary">View Projects</Button>
      </Link>
    </div>
  );
}
