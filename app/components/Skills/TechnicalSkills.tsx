import { creativeProcess, skills } from '@/app/constant/Constant';
import { HiOutlineCommandLine } from 'react-icons/hi2';
import { GitCommitHorizontal } from 'lucide-react';

export default function TechnicalSkills() {
  return (
    <div className="flex max-w-full flex-col items-center gap-6 p-2 sm:items-start md:gap-10 dark:text-white">
      <div className="w-full">
        <h1
          className="mb-6 text-3xl font-semibold md:text-5xl"
          style={{ fontFamily: "'Momo Signature', cursive" }}
        >
          Skills and Expertise
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          The tools and technologies I frequently use to build amazing web
          applications:
        </p>
      </div>
      <div>
        <p className="flex items-center gap-2 text-xl font-bold uppercase md:gap-3">
          <HiOutlineCommandLine className="h-7 w-7 fill-orange-200 text-orange-500" />
          Technical Stack
        </p>
        <div className="mt-4 flex flex-wrap items-start justify-start gap-2 md:gap-3">
          {skills.map((skill, index) => {
            const SkillIcon = skill.icons;
            return (
              <div
                key={index}
                className={`flex items-center justify-center gap-2 rounded-md border border-orange-300 bg-orange-50 p-1 px-2 text-orange-900 shadow-sm transition-all hover:scale-105`}
              >
                <SkillIcon className={`h-5 w-5 ${skill.color}`} />
                <p>{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full">
        {/* Header Section */}
        <p className="flex items-center gap-2 text-xl font-bold tracking-wider uppercase md:gap-3">
          <GitCommitHorizontal className="h-7 w-7 text-orange-500" />
          Development Approach
        </p>

        <div className="mt-6 flex flex-col items-center gap-4 md:items-start md:gap-3">
          {creativeProcess.map((process, index) => {
            const isEven = index % 2 === 0;
            const rotation = isEven ? 'md:rotate-2' : 'md:-rotate-2';
            const offset = !isEven ? 'md:ml-20' : 'md:ml-0';

            return (
              <div
                key={index}
                className={`flex w-full max-w-md flex-col items-start justify-center gap-2 rounded-md bg-orange-100 p-4 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:border dark:border-zinc-800 dark:bg-zinc-900 ${rotation} ${offset} `}
              >
                <h3 className="font-bold text-orange-900 dark:text-orange-400">
                  {process.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-zinc-400">
                  {process.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
