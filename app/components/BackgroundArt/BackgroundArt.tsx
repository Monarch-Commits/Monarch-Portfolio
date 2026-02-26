export default function UltraModernAbstractBackground() {
  return (
    <div className="fixed inset-0 -z-10 hidden overflow-hidden bg-[#fdfefe] sm:block">
      <div className="pointer-events-none absolute -right-[10%] -bottom-[20%] h-64 w-64 rounded-[50%] bg-[radial-gradient(circle_at_60%_40%,rgba(251,113,133,0.3),transparent_70%)] blur-[60px] will-change-transform sm:-right-[20%] sm:-bottom-[35%] sm:h-128 sm:w-3xl sm:bg-[radial-gradient(circle_at_60%_40%,rgba(251,113,133,0.35),rgba(253,186,200,0.15),transparent_70%)] sm:blur-[80px]" />

      <div className="pointer-events-none absolute top-[5%] -left-[5%] h-32 w-48 rotate-[5deg] rounded-[24px] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.55),rgba(240,248,255,0.2))] shadow-lg backdrop-blur-xs will-change-transform sm:top-[10%] sm:-left-[10%] sm:h-56 sm:w-80 sm:rounded-[32px] sm:backdrop-blur-sm" />

      <div className="pointer-events-none absolute top-[50%] right-[4%] hidden h-44 w-64 -rotate-[8deg] rounded-[28px] bg-[radial-gradient(circle_at_50%_50%,rgba(175,255,215,0.35),rgba(200,255,230,0.15))] shadow-lg backdrop-blur-sm will-change-transform sm:block" />

      <div className="pointer-events-none absolute top-[25%] left-[15%] h-40 w-40 rounded-full border border-slate-300/20 sm:top-[30%] sm:left-[20%] sm:h-56 sm:w-56 sm:border-slate-300/40" />

      <div className="pointer-events-none absolute top-[12%] right-[8%] hidden h-20 w-20 rotate-6 rounded-lg border border-pink-300/30 bg-[radial-gradient(circle_at_center,rgba(251,113,133,0.25),rgba(253,186,200,0.1))] sm:block" />
      <div className="pointer-events-none absolute right-[38%] bottom-[20%] hidden h-5 w-5 rounded-sm bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.3),rgba(167,255,235,0.15))] sm:block" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.45)_0%,transparent_65%)]" />
    </div>
  );
}
