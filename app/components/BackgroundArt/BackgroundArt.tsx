'use client';

import { useEffect, useState } from 'react';

export default function UltraModernAbstractBackground() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#fdfefe]">
      <div className="absolute -top-20 -left-20 h-120 w-120 rounded-[63%_37%_54%_46%/55%_48%_52%_45%] bg-purple-300/30 blur-2xl" />

      <div className="absolute right-[-10%] bottom-[-30%] h-112 w-md rounded-[45%_55%_70%_30%/60%_30%_70%_40%] bg-rose-200/40 blur-2xl" />

      <div className="absolute top-[18%] -left-[10%] h-56 w-80 rotate-6 rounded-[72%_28%_38%_62%/45%_60%_40%_55%] border border-indigo-300/40 bg-indigo-200/40 shadow-lg" />

      <div className="absolute top-[50%] right-[15%] h-40 w-64 -rotate-12 rounded-[30%_70%_60%_40%/50%_40%_60%_50%] border border-teal-300/40 bg-teal-200/40 shadow-md" />

      <div className="absolute bottom-[5%] left-[30%] h-24 w-72 rotate-12 rounded-[80%_20%_50%_50%/50%_50%_50%_50%] border border-gray-300/60 bg-white/40 shadow-md" />

      <div className="absolute top-[35%] left-[55%] h-52 w-52 rounded-[40%_60%_55%_45%/50%_40%_60%_50%] border-2 border-slate-300/50" />

      <div className="absolute top-[15%] left-[40%] h-8 w-8 rotate-45 rounded-[40%_60%_60%_40%] bg-blue-400/40" />

      <div className="absolute bottom-[35%] left-[15%] h-10 w-6 rotate-12 rounded-[60%_40%_70%_30%] bg-gray-200/40" />

      <div className="absolute top-[12%] right-[28%] h-6 w-20 rotate-6 rounded-[70%_30%_50%_50%] bg-pink-300/30" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.25)_100%)]" />
    </div>
  );
}
