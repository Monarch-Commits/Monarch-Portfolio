import Image from 'next/image';

export default function DashboardImage() {
  return (
    <div className="relative flex w-full max-w-md items-center justify-center p-6 md:max-w-md lg:max-w-lg">
      <div className="group relative flex aspect-square w-[clamp(180px,70vw,320px)] rotate-3 items-end justify-center border bg-white shadow-xl transition-all duration-500 ease-out hover:scale-105 hover:rotate-0 hover:shadow-2xl">
        <Image
          src="https://res.cloudinary.com/db2x3itfk/image/upload/f_auto,q_auto/v1771628562/Gemini_Generated_Image_llpwv6llpwv6llpw_kbfel6.png"
          alt="profile"
          fill
          sizes="(max-width: 640px) 180px,
         (max-width: 1024px) 70vw,
         320px"
          priority
          className="border object-cover p-4 pb-8 shadow-2xl transition-transform duration-500 ease-out group-hover:scale-110"
        />

        <div className="absolute top-0 -right-6 z-10 h-5 w-20 rotate-20 bg-orange-200/50 shadow-sm transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6" />

        <div className="absolute bottom-0 -left-6 z-10 h-5 w-20 -rotate-40 bg-green-200/40 shadow-sm transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6" />
      </div>
    </div>
  );
}
