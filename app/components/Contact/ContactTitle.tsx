'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ContactTitle() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <div ref={ref} className="mb-10 space-y-3 text-center">
      <motion.h2
        style={{
          y,
          fontFamily: 'var(--font-rounded), sans-serif',
        }}
        className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
      >
        Let&apos;s{' '}
        <span className="bg-linear-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          Collaborate
        </span>
      </motion.h2>

      <motion.p
        style={{ y }}
        className="mx-auto max-w-md text-balance text-gray-500"
      >
        Have an idea in mind? Let&apos;s talk about it and turn it into reality.
      </motion.p>
    </div>
  );
}
