import { creativeProcess, skills } from '@/app/constant/Constant';
import { HiOutlineCommandLine } from 'react-icons/hi2';
import { GiFairyWand } from 'react-icons/gi';

export default function TechnicalSkills() {
  return (
    <div className="flex max-w-full flex-col gap-6 p-2 md:gap-10">
      <div className="w-full">
        <h1
          className="mb-6 text-3xl font-semibold md:text-5xl"
          style={{ fontFamily: "'Momo Signature', cursive" }}
        >
          Skills and Expertise
        </h1>
        <p>
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
                className="flex items-center justify-center gap-2 rounded-md border border-orange-300 bg-orange-50 p-1 px-2 text-orange-900 shadow-sm transition-all hover:scale-105 hover:bg-orange-200 dark:text-orange-300"
              >
                <SkillIcon className="h-5 w-5" />
                <p>{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className="flex items-center gap-2 font-semibold md:gap-3">
          <GiFairyWand className="h-7 w-7" />
          Development Approach
        </p>
        <div className="mt-4 flex flex-col items-start justify-start gap-2 md:gap-3">
          {creativeProcess.map((process, index) => (
            <div
              key={index}
              className="flex w-md max-w-full flex-col items-start justify-center gap-2 bg-orange-50 p-2 shadow-sm transition-all hover:scale-105 hover:dark:bg-orange-950 hover:dark:text-orange-300"
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
