import { SoftSkills } from '@/app/constant/Constant';
import { Egg } from 'lucide-react';

export default function SoftSkill() {
  return (
    <div className="mt-6 flex max-w-full flex-col items-center justify-center gap-6 p-4 md:gap-10">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 shadow-sm dark:bg-zinc-800">
          <Egg className="h-5 w-5 text-orange-600 dark:text-orange-400" />
        </div>

        <h2 className="text-2xl font-bold tracking-wide text-gray-800">
          Soft Skills
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SoftSkills.map((skill, index) => {
          const rotations = ['md:rotate-8', 'md:-rotate-5', 'md:rotate-1'];

          const tapeStyles = [
            '-top-3 -left-4 -rotate-12',
            '-top-3 -right-4 rotate-12',
            '-top-3 -right-1 rotate-0',
          ];

          return (
            <div
              key={index}
              className={`relative flex w-full max-w-[320px] flex-col items-start justify-center gap-2 bg-orange-100 p-6 shadow-md transition-all hover:z-10 hover:scale-105 hover:rotate-0 hover:shadow-xl dark:border dark:border-zinc-800 dark:bg-zinc-900 ${
                rotations[index % rotations.length]
              }`}
            >
              {/* Tape */}
              <div
                className={`absolute h-5 w-24 border-x border-white/20 bg-green-300/40 backdrop-blur-[1px] ${tapeStyles[index % tapeStyles.length]}`}
              />

              <h3 className="text-lg font-bold text-orange-900 dark:text-orange-400">
                {skill.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-zinc-400">
                {skill.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
