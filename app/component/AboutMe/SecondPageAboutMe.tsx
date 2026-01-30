import Image from 'next/image';

export default function SecondPageAboutMe() {
  return (
    <div className="flex min-h-full w-full flex-col-reverse items-center justify-center gap-5 p-6 md:flex-col lg:flex-row">
      {/* LEFT POLAROID IMAGE */}
      <div className="relative flex aspect-square w-[clamp(180px,50vw,288px)] -rotate-3 items-end justify-center overflow-visible border bg-white shadow-xl">
        <Image
          src="https://drive.google.com/uc?export=view&id=1mymCU0TCih6Ek8To6o6WCT7fl6rx6TT0"
          alt="profile"
          fill
          className="object-cover p-4 pb-8"
        />
        <div className="absolute -right-6 bottom-0 z-20 h-5 w-20 rotate-140 bg-orange-200" />
        <div className="absolute top-0 -left-6 z-20 h-5 w-20 -rotate-12 bg-orange-200" />
      </div>

      {/* RIGHT TEXT CARD */}
      <div className="relative z-10 max-w-full overflow-visible rounded-lg bg-[#F6F1E7] p-6 shadow-md md:max-w-md">
        <h2
          className="mb-4 text-2xl font-bold"
          style={{ fontFamily: "'Momo Signature', cursive" }}
        >
          About Me
        </h2>
        <p className="text-gray-600">
          Hello 👋 I’m Monarch, a developer who loves building clean,
          responsive, and user-friendly web applications.
        </p>

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
