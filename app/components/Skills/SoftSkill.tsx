import { SoftSkills } from '@/app/constant/Constant';
import { BiLeaf } from 'react-icons/bi';

export default function SoftSkill() {
  return (
    <div className="mt-0 flex w-xl max-w-full flex-col items-center justify-center overflow-hidden md:mt-20 md:overflow-visible dark:text-black">
      <div>
        <p className="flex items-center gap-2 font-semibold md:gap-3 dark:text-white">
          <BiLeaf className="h-7 w-7" />
          Soft Skills
        </p>
      </div>
      <div className="mt-4 grid grid-cols-1 items-center px-2 md:gap-2">
        {SoftSkills.map((skill, index) => (
          <div
            key={index}
            className={`relative mb-4 flex w-sm max-w-full flex-col items-start justify-center gap-2 bg-orange-100 p-3 px-3 shadow-md transition-all hover:shadow-xl ${
              index % 3 === 0
                ? 'md:rotate-2'
                : index % 3 === 1
                  ? 'md:-rotate-6'
                  : 'md:rotate-3'
            }`}
          >
            <h3 className="font-bold">{skill.title}</h3>
            <p className="text-gray-700">{skill.description}</p>
            <div
              className={`absolute -top-3 -left-4 h-4 w-24 -rotate-12 bg-orange-200/50 shadow-sm ${
                index % 3 === 0
                  ? 'top-0 -right-6'
                  : index % 3 === 1
                    ? '-right-6 bottom-0'
                    : 'top-10 -left-10 rotate-0'
              }`}
            />
            <div
              className={`absolute -right-2 -bottom-2 h-4 w-20 rotate-6 bg-green-200/40 shadow-sm ${
                index % 3 === 0
                  ? 'top-0 -right-6'
                  : index % 3 === 1
                    ? '-right-6 bottom-0'
                    : 'top-0 -right-10 rotate-30'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
