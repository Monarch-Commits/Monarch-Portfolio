'use client';

import { Button } from '@/components/ui/button';
import DockText from '@/components/ui/dock-text';

export function LayoutTextFlipDemo() {
  return (
    <section className="mt-20 flex w-full items-center justify-center p-2 md:mt-0 md:p-6 lg:w-lg">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          {/* Greeting */}
          <p className="text-muted-foreground text-xs font-medium tracking-[0.3em] sm:text-sm">
            HI, I’M
          </p>

          {/* Name */}
          <div
            className="text-4xl leading-tight font-extrabold text-amber-800 sm:text-5xl md:text-6xl"
            style={{ fontFamily: "'Momo Signature', cursive" }}
          >
            <DockText text="Monarch" />
          </div>

          {/* Main value proposition */}
          <p className="text-foreground max-w-xl text-lg font-semibold sm:text-xl md:text-2xl">
            I create <span className="text-amber-700">clean, efficient</span>,
            and <span className="text-amber-700">visually refined</span> web
            applications.
          </p>

          {/* Supporting description */}
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed sm:text-base">
            Turning ideas into smooth, functional, and elegant digital
            experiences that feel fast, intuitive, and thoughtfully crafted.
          </p>

          {/* Actions */}
          <div className="mt-2 flex flex-wrap gap-3 md:mt-4">
            <Button
              variant="outline"
              size={'sm'}
              className="border-amber-300 bg-amber-50 text-amber-900 transition-all hover:bg-amber-100 focus-visible:ring-amber-400"
            >
              Learn More
            </Button>

            <Button
              asChild
              size={'sm'}
              variant="outline"
              className="border-amber-300 text-amber-900 transition-all hover:bg-amber-100 focus-visible:ring-amber-400"
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1GBSKZdTOhEmwu4BdJOmC-TifN3rxF69y"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
