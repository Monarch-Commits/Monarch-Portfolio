import { skills } from '@/app/constant/Constant';
import { HiOutlineCommandLine } from 'react-icons/hi2';

export default function SkillsStacks() {
  return (
    <div className="flex w-full flex-col items-center justify-center pb-8">
      {/* Header Section - Centered */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 shadow-sm dark:bg-zinc-800">
          <HiOutlineCommandLine className="h-5 w-5 text-orange-600 dark:text-orange-400" />
        </div>

        <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
          Technical Stack
        </h2>
      </div>

      {/* Skills Grid - Naka-center ang mga items */}
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3 px-4">
        {skills.map((skill, index) => {
          const SkillIcon = skill.icons;
          return (
            <div
              key={index}
              className="group flex items-center justify-center gap-3 rounded-md border border-orange-300 bg-orange-50 p-2 px-4 text-orange-900 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-orange-100 hover:shadow-md"
            >
              <SkillIcon
                className={`h-5 w-5 transition-transform group-hover:rotate-6 ${skill.color}`}
              />
              <p className="text-sm font-medium sm:text-base">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
