import Image from 'next/image';

export default function DashboardImage() {
  return (
    <div className="relative flex w-full max-w-md items-center justify-center p-6 md:max-w-md lg:max-w-lg">
      {/* Background blobs */}
      <div className="absolute top-10 -left-10 z-0 h-40 w-40 rotate-12 rounded-[45%_55%_50%_50%] bg-orange-300/50 blur-3xl" />
      <div className="absolute top-4 right-0 z-0 h-16 w-16 rounded-full bg-yellow-300/40 blur-2xl" />
      <div className="absolute bottom-0 left-1/4 z-0 h-20 w-20 rotate-6 rounded-lg bg-green-800/40 blur-2xl" />

      {/* Main image container */}
      <div className="relative z-10 flex aspect-square w-3/4 max-w-sm flex-col items-center justify-end overflow-hidden rounded-[69%_31%_24%_76%/79%_66%_34%_21%] bg-linear-to-tr from-orange-300 sm:h-72 sm:w-72 sm:max-w-md md:h-70 md:w-70 md:max-w-lg">
        <Image
          src="https://drive.google.com/uc?export=view&id=10WB8dssG0r6vjfcScC-CXqoY2vx83smd"
          alt="profile"
          fill
          className="z-10 object-cover"
        />
      </div>

      {/* Floating left blob */}
      <div className="absolute left-4 z-9 h-8 w-8 rounded-[69%_31%_24%_76%/79%_66%_34%_21%] bg-linear-to-br from-emerald-400 via-green-500 to-teal-600 shadow-xl sm:left-8 sm:h-10 sm:w-10 md:left-12 md:h-12 md:w-12 lg:left-20 lg:h-15 lg:w-15" />

      {/* Floating right blob */}
      <div className="absolute right-4 z-20 h-8 w-8 rounded-[50%_50%_64%_36%/16%_28%_72%_84%] bg-linear-to-tr from-lime-300 via-emerald-300 to-green-400 shadow-xl sm:right-8 sm:h-10 sm:w-10 md:right-12 md:h-14 md:w-14 lg:right-20 lg:h-16 lg:w-16" />

      {/* Floating bottom-left blob */}
      <div className="absolute bottom-2 left-4 z-20 h-8 w-8 rounded-[69%_31%_76%_24%/51%_66%_34%_49%] bg-linear-to-r from-green-700 via-emerald-700 to-teal-800 shadow-xl sm:bottom-4 sm:left-8 sm:h-10 sm:w-10 md:bottom-6 md:left-16 md:h-14 md:w-14 lg:left-24 lg:h-13 lg:w-13" />

      {/* Decorative circles */}
      <div className="absolute top-1/2 right-4 z-10 h-12 w-12 rounded-full border-2 border-orange-200 blur-sm" />
      <div className="absolute bottom-2 left-10 z-10 h-8 w-8 rounded-full bg-orange-300/50 blur-sm" />
    </div>
  );
}
