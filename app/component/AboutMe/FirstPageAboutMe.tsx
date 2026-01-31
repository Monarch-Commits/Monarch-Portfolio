import Image from 'next/image';

export default function FirstPageAboutMe() {
  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center gap-5 p-1 px-6 sm:w-full sm:flex-col md:p-10 lg:flex-row">
      <div className="flex w-full flex-col items-end gap-3 rounded-xl md:p-8 dark:text-gray-900">
        <div className="relative max-w-full rotate-3 overflow-visible rounded-lg bg-orange-50 p-6 shadow-lg md:max-w-lg dark:bg-orange-100">
          <h2
            className="mb-4 text-2xl font-semibold"
            style={{ fontFamily: "'Momo Signature', cursive" }}
          >
            About Me
          </h2>

          <p className="text-gray-600">
            Hello 👋 I’m Monarch, a Front-End Developer passionate about
            bringing designs to life...
          </p>

          <div className="pointer-events-none absolute top-0 right-0 z-10 h-20 w-20 overflow-visible sm:h-20 sm:w-20 md:-top-30 md:-left-36 md:h-50 md:w-50">
            <Image
              src="https://drive.google.com/uc?export=view&id=1cruimvvJdhw4h8k2cbH8GZrcG6qqFlOR"
              alt="red leaf"
              fill
              sizes="(max-width: 768px) 80px, 200px"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="max-w-full rounded-lg bg-orange-50 p-6 shadow-xl dark:bg-orange-100">
          <h2
            className="mb-4 text-2xl font-semibold"
            style={{ fontFamily: "'Momo Signature', cursive" }}
          >
            Project-Focused
          </h2>
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
          src="https://drive.google.com/uc?export=view&id=1UtU-4W5bqMbLvXE4KVJ4SU6wScv6d8RN"
          alt="with my Christine"
          fill
          sizes="(max-width: 768px) 80px, 200px"
          className="object-cover p-4 pb-8"
        />

        <div className="absolute top-0 -right-6 z-10 h-5 w-20 rotate-12 bg-orange-200" />
        <div className="absolute top-0 -left-6 z-10 h-5 w-20 -rotate-12 bg-orange-200" />
      </div>
    </div>
  );
}
