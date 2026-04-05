'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function SkillsHeader() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Separate speeds for depth effect
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 25]);

  return (
    <div ref={ref} className="mb-10 space-y-3 text-center">
      <motion.h2
        style={{
          y: titleY,
          fontFamily: 'var(--font-rounded), sans-serif',
        }}
        className="bg-linear-to-r from-orange-700 via-orange-600 to-blue-900 bg-clip-text py-2 text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl"
      >
        Skills and Expertise
      </motion.h2>

      <motion.p
        style={{ y: textY }}
        className="mx-auto max-w-md text-balance text-gray-500"
      >
        The tools and technologies I frequently use to build amazing web
        applications:
      </motion.p>
    </div>
  );
}
