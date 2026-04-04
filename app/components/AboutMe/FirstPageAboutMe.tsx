'use client';

import Image from 'next/image';
import { User, Target, Sprout } from 'lucide-react';

export default function FirstPageAboutMe() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 p-6 md:p-10 lg:flex-row">
      <div className="flex max-w-2xl flex-col items-center gap-8 md:items-end">
        {/* FIRST CARD */}
        <div className="relative w-full max-w-lg cursor-default rounded-xl bg-orange-50 p-6 shadow-lg transition-transform duration-300 hover:scale-101 hover:shadow-xl">
          {/* FLOATING LEAF */}
          <div className="pointer-events-none absolute -top-10 -left-6 z-10 h-24 w-24 md:-top-12 md:-left-12 md:h-32 md:w-32">
            <Image
              src="https://res.cloudinary.com/db2x3itfk/image/upload/f_auto,q_auto/v1771628562/Gemini_Generated_Image_yc7ay7yc7ay7yc7a_1_mqvtnn.png"
              alt="red leaf"
              width={128}
              height={128}
              className="object-contain drop-shadow-xl"
            />
          </div>

          <div className="mb-4 flex items-center gap-2">
            <User className="text-orange-600" size={24} />
            <h2 className="text-2xl font-semibold text-gray-900 md:text-4xl">
              About Me
            </h2>
          </div>
          <p className="leading-relaxed text-gray-700">
            Hello 👋 I’m a web developer. I work with{' '}
            <span className="font-semibold text-orange-700">Next.js</span>,{' '}
            <span className="font-semibold text-orange-700">React</span>, and{' '}
            <span className="font-semibold text-orange-700">PostgreSQL</span> to
            create{' '}
            <span className="font-semibold text-orange-700">
              full-stack applications
            </span>
            .
            <br />
            <br />I focus on creating web apps that are simple, fast, and easy
            to use, with attention to how they perform and feel in real use.
          </p>
        </div>

        {/* SECOND CARD */}
        <div className="relative w-full max-w-lg cursor-default rounded-xl bg-orange-50 p-6 shadow-lg transition-transform duration-300 hover:scale-101 hover:shadow-xl">
          {/* Header */}
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-lg bg-orange-100 p-2 dark:bg-orange-200/20">
              <Target className="text-orange-600" size={22} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              What I Can Do
            </h2>
          </div>

          {/* List - Inayos ang spacing at tinanggal ang manual bullets */}
          <ul className="space-y-4">
            {[
              'Build full-stack apps with Next.js & PostgreSQL',
              'Create responsive, mobile-first interfaces',
              'Write clean, maintainable & scalable code',
              'Optimize performance and user experience',
            ].map((text, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                <span className="text-[15px] leading-relaxed font-medium">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          {/* Footer Icon */}
          <div className="mt-6 flex justify-end opacity-70">
            <Sprout className="animate-pulse text-green-500" size={18} />
          </div>
        </div>
      </div>

      <div className="group relative mt-10 flex w-[clamp(250px,80vw,500px)] rotate-3 cursor-pointer items-end justify-center bg-white p-4 pb-12 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:scale-105 lg:mt-0">
        <div className="relative aspect-1265/832 w-full overflow-hidden">
          <Image
            src="/Aboutme.png"
            alt="Coding at my desk"
            fill
            sizes="(max-width: 768px) 80vw, 500px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>

        {/* TAPES */}
        <div className="absolute top-0 -right-4 z-10 h-5 w-20 rotate-12 bg-orange-200/50 shadow-sm transition-opacity duration-300 group-hover:opacity-80" />
        <div className="absolute top-0 -left-4 z-10 h-5 w-20 -rotate-12 bg-orange-200/50 shadow-sm transition-opacity duration-300 group-hover:opacity-80" />

        <div className="absolute -right-4 -bottom-2 rotate-[-5deg] rounded-md bg-orange-800 px-4 py-2 text-xs font-medium text-white shadow-lg transition-transform duration-300 group-hover:scale-105 md:text-sm">
          Available for Work
        </div>
      </div>
    </div>
  );
}
