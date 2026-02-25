import { creativeProcess } from '@/app/constant/Constant';
import { GitCommitHorizontal } from 'lucide-react';

export default function TechnicalSkills() {
  return (
    <div className="flex max-w-full flex-col items-center justify-center gap-6 p-4 md:gap-10">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 shadow-sm dark:bg-zinc-800">
          <GitCommitHorizontal className="h-5 w-5 text-orange-600 dark:text-orange-400" />
        </div>

        <h2 className="text-2xl font-bold tracking-wide text-gray-800 dark:text-white">
          Development Approach
        </h2>
      </div>
      <div className="w-full">
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {creativeProcess.map((skill, index) => {
            const rotations = ['md:rotate-2', 'md:-rotate-3', 'md:rotate-1'];

            const tapeStyles = [
              '-top-2 left-10 -rotate-10',
              '-top-3 left-15 rotate-0',
              '-top-3 left-15 -rotate-12',
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
    </div>
  );
}
