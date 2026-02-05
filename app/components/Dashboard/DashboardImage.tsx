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
          sizes="(max-width: 640px) 180px,
         (max-width: 1024px) 70vw,
         320px"
          priority
          className="border object-cover p-4 pb-8 shadow-2xl"
        />

        <div className="absolute top-0 -right-6 z-10 h-5 w-20 rotate-20 bg-orange-200/50 shadow-sm" />
        <div className="absolute bottom-0 -left-6 z-10 h-5 w-20 -rotate-40 bg-green-200/40 shadow-sm" />
        {/* <div className="absolute -bottom-10 -left-30 z-20 h-50 w-50 overflow-visible sm:h-40 sm:w-40 md:bottom-0 md:-left-30 md:h-60 md:w-60">
          <Image
            src="https://drive.google.com/uc?export=view&id=1K7IDet6k_0Ur5_xw6c9l931nG5_AVi-0"
            alt="basta bulak na laya"
            fill
            sizes="(max-width: 640px) 160px,
         (max-width: 1024px) 240px,
         320px"
            priority
            className="scale-x-[-1] rotate-12 object-contain drop-shadow-2xl"
          />
        </div> */}
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/2 right-4 z-30 h-12 w-12 rounded-full border-2 border-orange-200 blur-sm" />
      <div className="absolute bottom-2 left-10 z-30 h-8 w-8 rounded-full bg-orange-300/50 blur-sm" />
    </div>
  );
}
