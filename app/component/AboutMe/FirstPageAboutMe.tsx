import Image from 'next/image';

export default function FirstPageAboutMe() {
  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center gap-5 p-1 px-6 sm:w-full sm:flex-col md:p-10 lg:flex-row">
      <div className="flex w-full max-w-3xl flex-col items-end gap-3 rounded-xl shadow-sm md:p-8 dark:text-gray-900">
        <div className="relative max-w-full rounded-lg bg-[#F6F1E7] p-6 shadow-md md:max-w-lg">
          <h2 className="mb-4 text-2xl font-bold">About Me</h2>
          <p className="text-gray-600">
            Hello 👋 I’m Monarch, a Front-End Developer passionate about
            bringing designs to life. Since 2023, I’ve been crafting clean,
            responsive, and user-friendly web applications using React, Next.js,
            and Chakra UI. I love creating interfaces that not only look great
            but also feel seamless on any device.
          </p>

          {/* image */}
          <div className="absolute top-0 right-0 flex h-30 w-30 scale-x-[-1] items-end justify-center sm:h-20 sm:w-20 md:-top-30 md:-left-35 md:h-60 lg:w-60">
            <Image
              src="/1.png"
              alt="profile"
              fill
              className="object-cover drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="max-w-full rounded-lg bg-[#F6F1E7] p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-bold">Project-Focused</h2>
          <p className="text-gray-600">
            “I want to work on projects that challenge me, let me turn creative
            designs into functional apps, and make a positive impact on how
            people use the web.”
          </p>
        </div>
      </div>

      {/* Image */}

      <div className="relative flex aspect-square w-[clamp(180px,70vw,320px)] rotate-3 items-end justify-center bg-white shadow-xl">
        <Image
          src="/wc.png"
          alt="profile"
          fill
          className="object-cover p-4 pb-8"
        />

        <div className="absolute top-0 -right-6 z-10 h-5 w-20 rotate-12 bg-orange-200" />
        <div className="absolute top-0 -left-6 z-10 h-5 w-20 -rotate-12 bg-orange-200" />
      </div>
    </div>
  );
}
