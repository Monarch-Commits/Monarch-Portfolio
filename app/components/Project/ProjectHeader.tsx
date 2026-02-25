'use client';
import { HiArrowTrendingDown } from 'react-icons/hi2';

export default function ProjectHeader() {
  return (
    <div className="mb-10 space-y-3 text-center">
      <h2
        className="bg-linear-to-r from-orange-400 via-orange-600 to-amber-900 bg-clip-text py-2 text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl"
        style={{ fontFamily: 'var(--font-rounded), sans-serif' }}
      >
        My Creative Works
      </h2>
      <div className="relative flex flex-wrap gap-3">
        <p className="mx-auto max-w-md text-balance text-gray-500">
          Selected projects showcasing my work in building efficient,
          responsive, and innovative web applications
        </p>
        <div
          style={{ fontFamily: "'Momo Signature', cursive" }}
          className="absolute right-2 bottom-1 hidden flex-col items-center justify-center font-semibold text-orange-500 md:flex"
        >
          <span>More</span>
          <span>Comming</span>
          <span>Soon!!</span>
          <HiArrowTrendingDown className="h-7 w-7" />
        </div>
      </div>
    </div>
  );
}
