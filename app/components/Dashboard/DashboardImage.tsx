import Image from 'next/image';

export default function DashboardImage() {
  return (
    <div className="relative flex w-full max-w-md items-center justify-center p-6 md:max-w-md lg:max-w-lg">
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
      </div>
    </div>
  );
}
