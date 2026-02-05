export default function Test() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#fdfcf8] font-sans">
      {/* --- BACKGROUND ELEMENTS (SVGs) --- */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top Left - Orange Waves */}
        <svg
          className="absolute top-0 left-0 h-auto w-[40%] text-[#f4a27e] opacity-80"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-20 150C50 120 120 250 250 180C350 130 380 50 400 -20H-20V150Z"
            fill="currentColor"
            fillOpacity="0.6"
          />
          <path
            d="M-20 180C80 150 150 280 280 210C380 160 410 80 430 10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-20 210C110 180 180 310 310 240C410 190 440 110 460 40"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Top Right - Gray/Beige Organic Shape & Leaf */}
        <div className="absolute top-[-5%] right-[-5%] h-auto w-[45%] text-[#d4ccc4]">
          <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M420 300C300 320 150 200 180 100C210 0 350 -50 420 -50V300Z"
              fill="currentColor"
              fillOpacity="0.4"
            />
            {/* Simple Leaf Outline */}
            <path
              d="M250 50Q280 150 220 250M250 50Q350 150 250 250M250 250Q150 150 250 50"
              stroke="#a8a29e"
              strokeWidth="1.5"
              fill="none"
              transform="rotate(15 250 150)"
            />
          </svg>
        </div>

        {/* Bottom Right - Brown/Mauve Layer */}
        <div className="absolute right-0 bottom-0 h-auto w-[60%]">
          <svg
            viewBox="0 0 500 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M520 420V150C450 130 350 250 250 280C150 310 50 220 -20 250V420H520Z"
              fill="#c4a4a4"
              fillOpacity="0.5"
            />
            <path
              d="M520 200C450 180 350 300 250 330C150 360 50 270 -20 300"
              stroke="#8e7d7d"
              strokeWidth="3"
              fill="none"
            />
            {/* Dots Pattern */}
            <circle cx="150" cy="350" r="5" fill="white" fillOpacity="0.6" />
            <circle cx="180" cy="340" r="5" fill="white" fillOpacity="0.6" />
            <circle cx="210" cy="360" r="5" fill="white" fillOpacity="0.6" />
          </svg>
        </div>

        {/* Bottom Left - Leaf Outline */}
        <div className="absolute bottom-[5%] left-[5%] w-[25%] opacity-40">
          <svg
            viewBox="0 0 200 300"
            fill="none"
            stroke="#b08d74"
            strokeWidth="2"
          >
            <path d="M20 280 Q 50 150 180 20" /> {/* Stem */}
            <path d="M180 20 Q 120 40 100 80 Q 140 100 180 20" />{' '}
            {/* Leaf top */}
            <path d="M120 120 Q 60 140 40 180 Q 80 200 120 120" />{' '}
            {/* Leaf mid */}
          </svg>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 space-y-4 text-center">
        <h1 className="font-serif text-5xl text-[#5a4a42]">Next.js 16</h1>
        <p className="text-lg tracking-wide text-[#8b7e74] uppercase">
          Pure CSS & SVG Design
        </p>
      </div>

      {/* --- FOOTER TEXT --- */}
      <div className="absolute bottom-6 left-8 z-20">
        <p className="text-xs font-medium tracking-tighter text-[#a8a29e] uppercase">
          Built with Next.js and Tailwind CSS
        </p>
      </div>
    </div>
  );
}
