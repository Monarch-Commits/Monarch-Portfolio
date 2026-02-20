'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { SiPostgresql, SiPrisma } from 'react-icons/si';
import { AboutMePersonalInfo } from '@/app/constant/Constant';

export default function SecondPageAboutMe() {
  return (
    // INAYOS: Tinanggal ang overflow-hidden para hindi maputol ang floating image
    <div className="flex min-h-full w-full flex-col-reverse items-center justify-center gap-10 p-6 pt-12 lg:flex-row">
      {/* LEFT POLAROID IMAGE */}
      <motion.div
        initial={{ opacity: 0, rotate: -5 }}
        whileInView={{ opacity: 1, rotate: -3 }}
        viewport={{ once: true }}
        className="relative z-20 flex aspect-square w-[clamp(200px,50vw,300px)] items-end justify-center border-8 border-white bg-white shadow-xl"
      >
        <Image
          src="https://drive.google.com/uc?export=view&id=1mymCU0TCih6Ek8To6o6WCT7fl6rx6TT0"
          alt="with my GF"
          fill
          sizes="(max-width: 768px) 200px, 300px"
          className="object-cover p-2 pb-10"
        />
        {/* Tapes */}
        <div className="absolute -right-6 bottom-4 h-5 w-20 rotate-140 bg-orange-200/50 shadow-sm" />
        <div className="absolute -top-2 -left-6 h-5 w-20 -rotate-12 bg-orange-200/50 shadow-sm" />
      </motion.div>

      {/* RIGHT TEXT CARD */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative w-full max-w-lg rounded-xl bg-orange-50 p-6 shadow-xl dark:bg-orange-100 dark:text-gray-900"
      >
        {/* FLOATING IMAGE - Inayos ang positioning para sa mobile (sm:hidden o adjusted left) */}
        <div className="absolute -top-20 -left-10 z-0 h-40 w-40 md:-left-28 md:h-52 md:w-52">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="https://drive.google.com/uc?export=view&id=1mNvKsMya4iH_oEGkgLtXxJ8kdnWJUGGn"
              alt="branch"
              width={200}
              height={200}
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

        <div className="relative z-10">
          <h2
            className="mb-4 text-3xl font-semibold md:text-4xl"
            style={{ fontFamily: "'Momo Signature', cursive" }}
          >
            Personal Info
          </h2>

          <div className="flex flex-col gap-2">
            {AboutMePersonalInfo.map((item, index) => (
              <p key={index} className="text-sm md:text-base">
                <span className="font-bold text-orange-800">
                  {item.label}:{' '}
                </span>
                <span className="text-gray-700"> {item.value}</span>
              </p>
            ))}

            <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-orange-200 pt-4">
              <span className="text-sm font-bold text-black md:text-base">
                Favorite Stack:
              </span>
              <div className="flex gap-3 text-gray-700">
                <TbBrandNextjs className="h-7 w-7 transition-colors hover:text-black" />
                <FaReact className="h-7 w-7 transition-colors hover:text-blue-500" />
                <SiPrisma className="h-7 w-7 transition-colors hover:text-blue-900" />
                <SiPostgresql className="h-7 w-7 transition-colors hover:text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
