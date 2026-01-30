import Image from 'next/image';

export default function DashboardImage() {
  return (
    <div className="relative flex w-full max-w-md items-center justify-center p-6 md:max-w-md lg:max-w-lg">
      {/* Background blobs */}
      <div className="absolute top-10 -left-10 z-0 h-40 w-40 rotate-12 rounded-[45%_55%_50%_50%] bg-orange-300/50 blur-3xl" />
      <div className="absolute top-4 right-0 z-0 h-16 w-16 rounded-full bg-yellow-300/40 blur-2xl" />
      <div className="absolute bottom-0 left-1/4 z-0 h-20 w-20 rotate-6 rounded-lg bg-green-800/40 blur-2xl" />

      {/* Main image container */}

      <div className="relative flex aspect-square w-[clamp(180px,70vw,320px)] rotate-3 items-end justify-center border bg-white shadow-xl">
        <Image
          src="https://drive.google.com/uc?export=view&id=1rJxQmm58HTT4n3scn3fqljTABU2vL1_5"
          alt="profile"
          fill
          className="border object-cover p-4 pb-8 shadow-2xl"
        />

        <div className="absolute top-0 -right-6 z-10 h-5 w-20 rotate-20 bg-orange-200" />
        <div className="absolute bottom-0 -left-6 z-10 h-5 w-20 -rotate-40 bg-orange-200" />
        <div className="md:right absolute bottom-0 -left-30 z-20 h-50 w-50 overflow-visible sm:h-40 sm:w-40 md:-bottom-5 md:h-60 md:w-60">
          <Image
            src="https://drive.google.com/uc?export=view&id=13-fc6KVRlOVpQsej03wSqkuq2PdTkxC-"
            alt="profile"
            fill
            className="scale-x-[-1] rotate-12 object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Floating left blob */}
      <div className="absolute left-4 z-9 h-8 w-8 rounded-[69%_31%_24%_76%/79%_66%_34%_21%] bg-linear-to-br from-emerald-400 via-green-500 to-teal-600 shadow-xl sm:left-8 sm:h-10 sm:w-10 md:left-12 md:h-12 md:w-12 lg:left-20 lg:h-15 lg:w-15">
        1
      </div>

      {/* Floating right blob */}
      <div className="absolute right-4 z-20 h-8 w-8 rounded-[50%_50%_64%_36%/16%_28%_72%_84%] bg-linear-to-tr from-lime-300 via-emerald-300 to-green-400 shadow-xl sm:right-8 sm:h-10 sm:w-10 md:right-12 md:h-14 md:w-14 lg:right-20 lg:h-16 lg:w-16">
        2
      </div>

      {/* Floating bottom-left blob */}

      {/* Decorative circles */}
      <div className="absolute top-1/2 right-4 z-10 h-12 w-12 rounded-full border-2 border-orange-200 blur-sm" />
      <div className="absolute bottom-2 left-10 z-10 h-8 w-8 rounded-full bg-orange-300/50 blur-sm" />
    </div>
  );
}
