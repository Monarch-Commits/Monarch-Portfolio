export default function UltraModernAbstractBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#fdfefe]">
      <div className="pointer-events-none absolute -right-[20%] -bottom-[35%] h-128 w-3xl rounded-[50%] bg-[radial-gradient(circle_at_60%_40%,rgba(251,113,133,0.35),rgba(253,186,200,0.15),transparent_70%)] blur-[80px] will-change-transform" />

      <div className="pointer-events-none absolute top-[10%] -left-[10%] h-56 w-80 rotate-[5deg] rounded-[32px] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.55),rgba(240,248,255,0.2))] shadow-xl backdrop-blur-sm will-change-transform" />

      <div className="pointer-events-none absolute top-[50%] right-[14%] h-44 w-64 -rotate-[8deg] rounded-[28px] bg-[radial-gradient(circle_at_50%_50%,rgba(175,255,215,0.35),rgba(200,255,230,0.15))] shadow-lg backdrop-blur-sm will-change-transform" />

      <div className="pointer-events-none absolute top-[30%] left-[20%] h-56 w-56 rounded-full border border-slate-300/40" />
      <div className="pointer-events-none absolute top-[12%] right-[8%] h-20 w-20 rotate-6 rounded-lg border border-pink-300/30 bg-[radial-gradient(circle_at_center,rgba(251,113,133,0.25),rgba(253,186,200,0.1))]" />

      <div className="pointer-events-none absolute right-[38%] bottom-[20%] h-5 w-5 rounded-sm bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.3),rgba(167,255,235,0.15))]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.45)_0%,transparent_65%)]" />
    </div>
  );
}
