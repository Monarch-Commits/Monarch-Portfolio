'use client';

import { Button } from '@/components/ui/button';
import DockText from '@/components/ui/dock-text';

export function LayoutTextFlipDemo() {
  return (
    <div className="mt-20 flex w-full items-center p-2 justify-center md:mt-0 md:p-6 lg:w-lg">
      <div className="relative mt-4 flex w-full flex-col items-center gap-1 sm:gap-2 md:items-start md:gap-3">
        {/* Greeting */}
        <p className="text-center tracking-[0.2em] sm:text-center sm:text-lg md:text-start">
          Hi, I’m
        </p>

        {/* Name */}
        <div className="text-center text-3xl leading-tight font-extrabold text-green-600 sm:text-center sm:text-5xl sm:leading-none md:text-start md:text-6xl md:leading-tight">
          <DockText text="Monarch" />
        </div>

        {/* Main value */}
        <p className="text-center text-lg font-semibold sm:text-center sm:text-xl md:text-start md:text-2xl">
          I create{' '}
          <span className="text-green-600 dark:text-green-400">
            clean, efficient,
          </span>{' '}
          and{' '}
          <span className="text-green-600 dark:text-green-400">
            visually appealing
          </span>{' '}
          web applications.
        </p>

        {/* Supporting line */}
        <p className="max-w-md text-center text-sm leading-relaxed text-gray-600 sm:text-center md:text-start">
          Turning ideas into smooth, functional, and beautiful digital
          experiences that feel fresh, fast, and intuitive.
        </p>
        <div>
          <Button variant={'destructive'}>Learn More</Button>
        </div>
      </div>
    </div>
  );
}
