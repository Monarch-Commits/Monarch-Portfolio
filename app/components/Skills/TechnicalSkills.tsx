import { creativeProcess, skills } from '@/app/constant/Constant';
import { HiOutlineCommandLine } from 'react-icons/hi2';
import { GiFairyWand } from 'react-icons/gi';

export default function TechnicalSkills() {
  return (
    <div className="flex max-w-full flex-col gap-6 p-2 md:gap-10 dark:text-white">
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
        <p className="flex items-center gap-2 font-semibold md:gap-3">
          <HiOutlineCommandLine className="h-7 w-7" />
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
      <div className="dark:text-black">
        <p className="flex items-center gap-2 font-semibold md:gap-3 dark:text-white">
          <GiFairyWand className="h-7 w-7" />
          Development Approach
        </p>
        <div className="mt-4 flex flex-col items-center justify-center gap-2 md:items-start md:justify-start md:gap-3">
          {creativeProcess.map((process, index) => (
            <div
              key={index}
              className={`flex w-md max-w-full flex-col items-start justify-center gap-2 rounded-sm bg-orange-100 p-2 shadow-sm transition-all ${index % 2 === 1 ? 'md:ml-20' : 'md:-rotate-2'} ${index % 3 === 0 ? 'md:rotate-2' : 'md:-rotate-2'}`}
            >
              <h3 className="font-bold">{process.title}</h3>
              <p className="text-gray-500">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
