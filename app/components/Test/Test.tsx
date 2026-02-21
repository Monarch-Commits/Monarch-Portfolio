'use client';

import { motion } from 'framer-motion';

export function EliteButterfly() {
  return (
    <motion.div
      className="absolute top-24 right-16 z-50 hidden md:block"
      animate={{
        y: [0, -15, 5, 0],
        x: [0, 10, -5, 0],
        rotateZ: [0, 10, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Maliit lang: 80x80 size para hindi agaw-pansin pero kitang-kita ang detail */}
      <svg width="80" height="80" viewBox="0 0 200 200">
        <defs>
          {/* Crystal-like Gradient */}
          <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          {/* Shine Effect */}
          <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Left Wing Group */}
        <motion.g
          style={{ transformOrigin: '100px 100px' }}
          animate={{ rotateY: [0, 82, 0] }}
          transition={{ duration: 0.25, repeat: Infinity, ease: 'linear' }}
        >
          {/* Main Wing Shape */}
          <path
            d="M100 100 C40 20, 0 80, 20 120 C40 160, 80 140, 100 100"
            fill="url(#wingGrad)"
            fillOpacity="0.85"
          />
          {/* Inner Detailing (Patterns) */}
          <path
            d="M90 95 Q60 60 40 100"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            strokeOpacity="0.3"
          />
          <motion.path
            d="M30 80 L100 100"
            stroke="url(#shine)"
            strokeWidth="2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.g>

        {/* Right Wing Group */}
        <motion.g
          style={{ transformOrigin: '100px 100px' }}
          animate={{ rotateY: [0, -82, 0] }}
          transition={{ duration: 0.25, repeat: Infinity, ease: 'linear' }}
        >
          <path
            d="M100 100 C160 20, 200 80, 180 120 C160 160, 120 140, 100 100"
            fill="url(#wingGrad)"
            fillOpacity="0.9"
          />
          <path
            d="M110 95 Q140 60 160 100"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            strokeOpacity="0.3"
          />
        </motion.g>

        {/* Minimalist Professional Body */}
        <rect x="98.5" y="80" width="3" height="60" rx="1.5" fill="#451a03" />

        {/* Antennae with delicate glow */}
        <g stroke="#451a03" strokeWidth="0.8" fill="none">
          <path d="M100 80 C95 70 85 65 80 65" />
          <path d="M100 80 C105 70 115 65 120 65" />
        </g>
        <circle cx="80" cy="65" r="1" fill="#fbbf24" />
        <circle cx="120" cy="65" r="1" fill="#fbbf24" />
      </svg>
    </motion.div>
  );
}
