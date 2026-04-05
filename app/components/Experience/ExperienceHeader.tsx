'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ExperienceHeader() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <div ref={ref} className="mb-10 space-y-3 text-center">
      <motion.h2
        style={{
          fontFamily: 'var(--font-rounded), sans-serif',
          y: foregroundY,
        }}
        className="bg-linear-to-r from-orange-400 via-orange-600 to-amber-800 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl"
      >
        Experiences
      </motion.h2>

      <motion.p
        style={{ y: foregroundY }}
        className="mx-auto max-w-lg text-balance text-gray-500"
      >
        Hands-on experience in IT support, system development, and academic
        projects focused on real-world problem solving.
      </motion.p>
    </div>
  );
}
