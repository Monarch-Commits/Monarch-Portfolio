import Image from 'next/image';

export default function CapstoneProject() {
  return (
    <div className="relative z-20 flex aspect-square w-[clamp(180px,50vw,288px)] -rotate-3 items-end justify-center overflow-visible border bg-white shadow-xl">
      <Image
        src="https://drive.google.com/uc?export=view&id=1mymCU0TCih6Ek8To6o6WCT7fl6rx6TT0"
        alt="with my GF"
        fill
        sizes="(max-width: 640px) 180px,
                  (max-width: 1024px) 50vw,
                  288px"
        className="object-cover p-4 pb-8"
      />
      <div className="absolute -right-6 bottom-0 h-5 w-20 rotate-140 bg-orange-200/50 shadow-sm" />
      <div className="absolute top-0 -left-6 h-5 w-20 -rotate-12 bg-orange-200/50 shadow-sm" />
    </div>
  );
}
