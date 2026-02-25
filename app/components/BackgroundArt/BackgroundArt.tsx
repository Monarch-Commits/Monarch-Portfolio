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
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#fdfeff]">
      {/* 🌫️ Ambient Blobs (Still soft but lighter blur) */}
      <div className="absolute -top-[10%] -left-[10%] h-96 w-96 rounded-full bg-purple-300/40 blur-2xl" />
      <div className="absolute top-[20%] -right-[5%] h-80 w-80 rounded-full bg-blue-300/30 blur-2xl" />
      <div className="absolute -bottom-[10%] left-[10%] h-112 w-md rounded-full bg-rose-200/40 blur-2xl" />

      {/* 🧊 CLEAR GLASS SHAPES */}
      <div className="absolute top-[15%] left-[15%] h-24 w-72 -rotate-12 rounded-full border border-white/60 bg-white/40 shadow-lg" />

      <div className="absolute right-[20%] bottom-[25%] h-36 w-36 rotate-12 rounded-3xl border border-indigo-200/60 bg-indigo-100/50 shadow-xl" />

      {/* 🎯 Clear Accent Circle */}
      <div className="absolute top-[40%] left-[50%] h-56 w-56 -translate-x-1/2 rounded-full border-2 border-slate-300/60" />

      {/* 🎨 Organic Shape (NOW SHARP) */}
      <div className="absolute top-[60%] left-[5%] h-40 w-40 rounded-[30%_70%_70%_30%] border border-teal-300/50 bg-teal-200/50" />

      {/* 🔷 Extra Sharp Accent Shape */}
      <div className="absolute top-[10%] right-[30%] h-28 w-28 rotate-6 rounded-[60%_40%_30%_70%] border border-rose-300/60 bg-rose-300/40" />

      {/* Small Details */}
      <div className="absolute top-[30%] left-[40%] h-6 w-6 rounded-full bg-blue-500/50" />
      <div className="absolute bottom-[40%] left-[12%] h-10 w-10 rotate-45 rounded-lg border border-amber-300/60 bg-amber-300/40" />
      <div className="absolute right-[40%] bottom-[15%] h-6 w-6 rounded-full border-2 border-pink-400/50" />

      {/* Subtle Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.2)_100%)]" />
    </div>
  );
}
