'use client';

import { Button } from '@/components/ui/button';
import { Download, Mail, Github } from 'lucide-react';
import Link from 'next/link';

export function LayoutTextFlipDemo() {
  return (
    <section className="mt-20 flex w-full items-center justify-center p-2 md:mt-0 md:p-6 lg:w-lg">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          {/* Intro */}
          <p className="text-muted-foreground text-xs font-medium tracking-[0.3em] sm:text-sm">
            HI, I’M
          </p>

          {/* Name */}
          <div
            className="bg-linear-to-r from-orange-500 to-orange-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl"
            style={{ fontFamily: 'var(--font-rounded), sans-serif' }}
          >
            Monarch
          </div>

          {/* Tagline */}
          <p className="text-foreground max-w-xl text-lg font-semibold sm:text-xl md:text-2xl">
            I create <span className="text-amber-700">clean, efficient</span>,{' '}
            and <span className="text-amber-700">visually refined</span> web
            applications.
          </p>

          {/* Description */}
          <p className="max-w-md text-sm leading-relaxed text-gray-700 sm:text-base">
            Turning ideas into smooth, functional, and elegant digital
            experiences that feel fast, intuitive, and thoughtfully crafted.
          </p>

          <div className="mt-2 flex items-center gap-4 text-gray-700 md:mt-3">
            {/* Email */}
            <a
              href="mailto:monarchpagcas@email.com"
              className="flex items-center gap-2 transition-all duration-200 hover:scale-105 hover:text-orange-600"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm">Email</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Monarch-Commits"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-all duration-200 hover:scale-105 hover:text-orange-600"
            >
              <Github className="h-4 w-4" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>

          {/* Buttons */}
          <div className="mt-2 flex flex-wrap gap-3 md:mt-4">
            <Link href="#Projects">
              <Button className="bg-orange-700 text-white shadow-md transition hover:scale-105 hover:bg-orange-600">
                View My Work
              </Button>
            </Link>

            <Button
              asChild
              variant="outline"
              className="border-orange-300 text-orange-700 transition hover:scale-105 hover:bg-orange-100"
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1UjYvPBYrjxWxXWJ-7oxIXcuNWEOp-upE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
