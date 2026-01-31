import Image from 'next/image';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { SiPostgresql, SiPrisma } from 'react-icons/si';
import { AboutMePersonalInfo } from '@/app/constant/Constant';
export default function SecondPageAboutMe() {
  return (
    <div className="flex min-h-full w-full flex-col-reverse items-center justify-center gap-5 p-6 md:flex-col lg:flex-row">
      {/* LEFT POLAROID IMAGE */}
      <div className="relative z-20 flex aspect-square w-[clamp(180px,50vw,288px)] -rotate-3 items-end justify-center overflow-visible border bg-white shadow-xl">
        <Image
          src="https://drive.google.com/uc?export=view&id=1mymCU0TCih6Ek8To6o6WCT7fl6rx6TT0"
          alt="profile"
          fill
          className="object-cover p-4 pb-8"
        />
        <div className="absolute -right-6 bottom-0 h-5 w-20 rotate-140 bg-orange-200" />
        <div className="absolute top-0 -left-6 h-5 w-20 -rotate-12 bg-orange-200" />
      </div>

      {/* RIGHT TEXT CARD */}
      <div className="relative max-w-full overflow-visible rounded-lg bg-orange-50 p-3 shadow-xl md:p-6 dark:bg-orange-100 dark:text-gray-900">
        <h2
          className="mb-4 text-2xl font-bold"
          style={{ fontFamily: "'Momo Signature', cursive" }}
        >
          Personal Info
        </h2>

        <div className="z-10 flex max-w-full flex-col items-start justify-center gap-2">
          {AboutMePersonalInfo.map((item, index) => (
            <p
              key={index}
              className={`flex w-full gap-2 ${item.break ? 'w-full' : ''}`}
            >
              <span className="font-medium">{item.label}:</span>
              <span className={'text-gray-600'}>{item.value}</span>
            </p>
          ))}
          <div className="flex flex-wrap items-center gap-3 text-gray-600 md:col-span-2">
            <span className="">Favorite Stack:</span>
            <TbBrandNextjs className="h-7 w-7" />
            <FaReact className="h-7 w-7" /> <SiPrisma className="h-7 w-7" />
            <SiPostgresql className="h-7 w-7" />
          </div>
        </div>

        {/* FLOATING IMAGE */}
        <div className="absolute -top-20 -left-40 z-50 h-60 w-60">
          <Image
            src="https://drive.google.com/uc?export=view&id=1mNvKsMya4iH_oEGkgLtXxJ8kdnWJUGGn"
            alt="profile"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
