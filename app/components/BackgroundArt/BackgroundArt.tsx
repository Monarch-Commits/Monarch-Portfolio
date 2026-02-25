export default function UltraModernAbstractBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#fdfeff]">
      {/* 🌫️ LAYER 1: Large "Lurd" (Blurred) Ambient Blobs */}
      <div className="absolute -top-[10%] -left-[10%] h-125 w-125 rounded-full bg-purple-300/30 blur-[120px]" />
      <div className="absolute top-[20%] -right-[5%] h-112.5 w-112.5 rounded-full bg-blue-300/20 blur-[100px]" />
      <div className="absolute -bottom-[10%] left-[10%] h-150 w-150 rounded-full bg-rose-200/30 blur-[130px]" />
      <div className="absolute right-[10%] bottom-[20%] h-100 w-100 rounded-full bg-amber-100/40 blur-[110px]" />

      {/* 🧊 LAYER 2: Sharp Glassmorphism Shapes (Semi-Clear) */}
      {/* Large Pill Shape */}
      <div className="absolute top-[15%] left-[15%] h-24 w-80 -rotate-25 rounded-full border border-white/40 bg-white/20 shadow-xl backdrop-blur-md" />

      {/* Floating Square */}
      <div className="absolute right-[20%] bottom-[25%] h-40 w-40 rotate-35 rounded-[2rem] border border-white/50 bg-indigo-50/30 shadow-2xl backdrop-blur-lg" />

      {/* Circle with Border only */}
      <div className="absolute top-[40%] left-[50%] h-64 w-64 -translate-x-1/2 rounded-full border-[1.5px] border-dashed border-slate-300/50" />

      {/* 🎨 LAYER 3: Medium Shapes (Mixed Blur & Sharp) */}
      {/* Deep Teal Blob (Blurred) */}
      <div className="absolute top-[60%] left-[5%] h-48 w-48 rounded-[30%_70%_70%_30%] bg-teal-200/40 blur-2xl" />

      {/* Bright Pink Organic (Sharp) */}
      <div className="absolute top-[10%] right-[30%] h-32 w-32 rotate-12 rounded-[60%_40%_30%_70%] border border-rose-200/30 bg-rose-400/20 backdrop-blur-[2px]" />

      {/* Violet Triangle-ish (Blurred) */}
      <div className="absolute bottom-[10%] left-[40%] h-56 w-72 rotate-12 rounded-full bg-violet-200/40 blur-[60px]" />

      {/* 🚀 LAYER 4: Small Sharp Accent Shapes (No Blur) */}
      {/* These add "crunchiness" and detail to the design */}
      <div className="absolute top-[30%] left-[40%] h-6 w-6 rounded-full bg-blue-500/40" />
      <div className="absolute top-[32%] left-[42%] h-2 w-2 rounded-full bg-white shadow-sm" />

      <div className="absolute bottom-[40%] left-[12%] h-12 w-12 rotate-45 rounded-lg border border-amber-200/50 bg-amber-400/30" />

      <div className="absolute top-[15%] right-[15%] h-4 w-20 rotate-120 rounded-full bg-slate-400/20" />

      <div className="absolute right-[40%] bottom-[15%] h-8 w-8 rounded-full border-2 border-pink-300/40" />

      <div className="absolute top-[50%] right-[8%] h-3 w-3 rounded-full bg-purple-400/60" />

      {/* 🎭 LAYER 5: Glass Panels (Overlay) */}
      <div className="absolute top-[45%] left-[25%] h-32 w-48 -rotate-6 rounded-2xl border border-white/60 bg-linear-to-br from-white/40 to-white/10 shadow-lg backdrop-blur-xl" />

      {/* 7. Final Polish: Grain Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Subtle radial light in the center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.3)_100%)]" />
    </div>
  );
}
