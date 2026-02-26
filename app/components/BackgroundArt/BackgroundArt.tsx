export default function UltraModernAbstractBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#fdfefe]">
      <div className="pointer-events-none absolute -right-[10%] -bottom-[20%] h-64 w-64 rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(251,113,133,0.25),transparent_70%)] blur-[60px] will-change-transform sm:h-128 sm:w-3xl sm:blur-[80px]" />

      <div className="pointer-events-none absolute top-[10%] -left-[5%] h-32 w-48 rotate-[5deg] rounded-[24px] bg-white/40 shadow-xl backdrop-blur-md will-change-transform sm:h-56 sm:w-80 sm:rounded-[32px]" />

      <div className="pointer-events-none absolute top-[50%] right-[14%] hidden h-44 w-64 -rotate-[8deg] rounded-[28px] bg-[radial-gradient(circle_at_50%_50%,rgba(175,255,215,0.35),rgba(200,255,230,0.15))] shadow-lg backdrop-blur-sm will-change-transform sm:block" />

      <div className="pointer-events-none absolute top-[30%] left-[20%] h-40 w-40 rounded-full border border-slate-300/20 sm:h-56 sm:w-56" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,transparent_80%)]" />
    </div>
  );
}
