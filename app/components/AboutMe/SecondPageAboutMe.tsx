'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { SiPostgresql, SiPrisma } from 'react-icons/si';
import { AboutMePersonalInfo } from '@/app/constant/Constant';

/**
 * 💡 UI/UX Tip: Ang damping 20-30 at stiffness 100-200
 * ay ang "sweet spot" para sa natural at fluid na motion.
 */
const smoothSpring = {
  type: 'spring',
  stiffness: 150,
  damping: 20,
} as const;

const containerVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier para sa smooth entrance
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0, transition: smoothSpring },
};

export default function SecondPageAboutMe() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className="relative flex min-h-full w-full flex-col-reverse items-center justify-center gap-10 overflow-hidden p-6 pt-12 lg:flex-row"
    >
      {/* DECORATIVE BRANCH */}
      <div className="pointer-events-none absolute z-0 hidden h-40 w-40 md:-left-28 md:flex md:h-52 md:w-52">
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Image
            src="https://res.cloudinary.com/db2x3itfk/image/upload/f_auto,q_auto/v1771629103/Gemini_Generated_Image_d2h12wd2h12wd2h1-removebg-preview_kqk8h2.png"
            alt="branch"
            fill
            className="object-contain opacity-80 drop-shadow-2xl"
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 250px, 320px"
          />
        </motion.div>
      </div>

      <motion.div
        whileHover={{
          scale: 1.02,
          rotate: -1,
          y: -10,
        }}
        whileTap={{ scale: 0.98 }}
        transition={smoothSpring}
        className="border-12px relative z-20 flex aspect-square w-[clamp(250px,50vw,320px)] cursor-pointer items-end justify-center border-white bg-white shadow-2xl"
      >
        <Image
          src="https://res.cloudinary.com/db2x3itfk/image/upload/f_auto,q_auto/v1771628561/WITH_SOMEONE_S_WEDDING_PICTURIAL_zsd7tp.jpg"
          alt="with my GF"
          fill
          sizes="(max-width: 768px) 250px, 320px"
          className="object-cover p-1 pb-12"
        />

        <div className="absolute -right-8 bottom-4 h-6 w-24 rotate-140 bg-orange-200/40 shadow-sm backdrop-blur-sm" />
        <div className="absolute -top-4 -left-8 h-6 w-24 -rotate-12 bg-orange-200/40 shadow-sm backdrop-blur-sm" />
      </motion.div>

      <motion.div
        variants={itemVariants}
        whileHover={{ y: -8 }}
        transition={smoothSpring}
        className="relative w-full max-w-lg rounded-2xl bg-white/90 p-8 shadow-lg backdrop-blur-md dark:bg-orange-50/90 dark:text-gray-900"
      >
        <div className="relative z-10">
          <motion.h2
            variants={itemVariants}
            className="mb-6 text-4xl font-bold tracking-tight text-orange-950"
            style={{ fontFamily: "'Momo Signature', cursive" }}
          >
            Personal Info
          </motion.h2>

          <div className="flex flex-col gap-3">
            {AboutMePersonalInfo.map((item, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                whileHover={{ x: 8, color: '#9a3412' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="cursor-default border-b border-orange-100 pb-1 text-sm md:text-base"
              >
                <span className="font-bold text-orange-800">
                  {item.label}:{' '}
                </span>
                <span className="text-gray-600"> {item.value}</span>
              </motion.p>
            ))}

            <motion.div
              variants={itemVariants}
              className="mt-4 flex flex-wrap items-center gap-4 border-t border-orange-200 pt-6"
            >
              <span className="text-sm font-bold text-black opacity-60">
                FAVORITE STACK:
              </span>
              <div className="flex gap-4">
                {[
                  { Icon: TbBrandNextjs, color: 'hover:text-black' },
                  { Icon: FaReact, color: 'hover:text-blue-500' },
                  { Icon: SiPrisma, color: 'hover:text-blue-900' },
                  { Icon: SiPostgresql, color: 'hover:text-blue-600' },
                ].map((Tech, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.4, y: -5, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={smoothSpring}
                  >
                    <Tech.Icon
                      className={`h-7 w-7 transition-colors duration-300 ${Tech.color} cursor-pointer text-gray-400`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
