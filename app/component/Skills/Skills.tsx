export default function SkillsSection() {
  const skills = [
    { name: 'React', color: 'bg-blue-100', tape: 'bg-blue-400/30' },
    { name: 'Next.js', color: 'bg-gray-100', tape: 'bg-gray-400/30' },
    { name: 'TypeScript', color: 'bg-blue-50', tape: 'bg-blue-500/20' },
    { name: 'Tailwind CSS', color: 'bg-cyan-50', tape: 'bg-cyan-400/30' },
    { name: 'Prisma', color: 'bg-indigo-50', tape: 'bg-indigo-400/20' },
    { name: 'PostgreSQL', color: 'bg-slate-100', tape: 'bg-slate-400/30' },
  ];

  return (
    <section className="mx-auto max-w-5xl px-8 py-16">
      <div className="relative rounded-sm border border-orange-100 bg-[#FFFDF5] p-10 shadow-sm">
        {/* Washi Tape Effect sa Kanto */}
        <div className="absolute -top-3 -left-4 h-8 w-24 -rotate-12 bg-orange-200/50 shadow-sm"></div>
        <div className="absolute -right-2 -bottom-2 h-8 w-20 rotate-6 bg-green-200/40 shadow-sm"></div>

        <h2 className="mb-8 font-serif text-4xl font-bold text-[#5D4037] italic">
          My Toolkit
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`relative ${skill.color} transform cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-4 transition-transform hover:scale-105 hover:-rotate-1`}
            >
              {/* Maliit na tape sa bawat skill */}
              <div
                className={`absolute -top-2 left-1/2 h-4 w-12 -translate-x-1/2 ${skill.tape} rotate-2`}
              ></div>

              <p className="mt-2 text-center font-bold text-[#5D4037]">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
