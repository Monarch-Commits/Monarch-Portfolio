'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { User, Target, Sprout } from 'lucide-react';

export default function FirstPageAboutMe() {
  return (
    // INAYOS: Inalis ang overflow-hidden para makita ang dahon na lumalampas sa gilid
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 p-6 md:p-10 lg:flex-row">
      <div className="flex max-w-2xl flex-col items-center gap-8 md:items-end">
        {/* --- FIRST CARD: ABOUT ME --- */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0, rotate: 3 }}
          viewport={{ once: true }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          className="relative w-full max-w-lg rounded-xl bg-orange-50 p-6 shadow-lg transition-shadow hover:shadow-2xl dark:bg-orange-100"
        >
          <div className="pointer-events-none absolute -top-10 -left-6 z-50 h-24 w-24 md:-top-12 md:-left-12 md:h-32 md:w-32">
            <motion.div
              animate={{ y: [0, 5, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="https://drive.google.com/uc?export=view&id=1cruimvvJdhw4h8k2cbH8GZrcG6qqFlOR"
                alt="red leaf"
                width={128}
                height={128}
                className="object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>

          <div className="mb-4 flex items-center gap-2">
            <User className="text-orange-600" size={24} />
            <h2
              className="text-2xl font-semibold text-gray-900 md:text-4xl"
              style={{ fontFamily: "'Momo Signature', cursive" }}
            >
              About Me
            </h2>
          </div>

          <p className="leading-relaxed text-gray-700">
            Hello 👋 I’m{' '}
            <span className="font-bold text-orange-700">Monarch</span>, a
            Front-End Developer passionate about bringing designs to life with
            clean code and smooth animations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0, rotate: -1 }}
          viewport={{ once: true }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          className="w-full max-w-lg self-center rounded-xl bg-orange-50 p-6 shadow-xl transition-shadow hover:shadow-2xl md:self-end dark:bg-orange-100"
        >
          <div className="mb-4 flex items-center gap-2">
            <Target className="text-orange-600" size={24} />
            <h2
              className="text-2xl font-semibold text-gray-900 md:text-4xl"
              style={{ fontFamily: "'Momo Signature', cursive" }}
            >
              Project-Focused
            </h2>
          </div>

          <p className="text-gray-700">
            “I want to work on projects that challenge me, let me turn creative
            designs into functional website, and make a positive impact on how
            people use the web.”
          </p>

          <div className="mt-4 flex justify-end">
            <Sprout className="animate-pulse text-green-600" size={20} />
          </div>
        </motion.div>
      </div>

      <div className="group relative mt-10 flex aspect-square w-[clamp(250px,80vw,350px)] rotate-3 items-end justify-center bg-white p-4 pb-12 shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-0 lg:mt-0">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="https://drive.google.com/uc?export=view&id=1UtU-4W5bqMbLvXE4KVJ4SU6wScv6d8RN"
            alt="with my Christine"
            fill
            sizes="(max-width: 768px) 80vw, 350px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Tapes */}
        <div className="absolute top-0 -right-4 z-10 h-5 w-20 rotate-12 bg-orange-200/50 shadow-sm transition-colors group-hover:bg-orange-300/60" />
        <div className="absolute top-0 -left-4 z-10 h-5 w-20 -rotate-12 bg-orange-200/50 shadow-sm transition-colors group-hover:bg-orange-300/60" />

        <div className="absolute -right-4 -bottom-2 rotate-[-5deg] rounded-md bg-orange-400 px-4 py-2 text-xs font-medium text-white shadow-lg transition-all group-hover:right-2 group-hover:rotate-0 md:text-sm">
          Available for Work
        </div>
      </div>
    </div>
  );
}
