import { SoftSkills } from '@/app/constant/Constant';
import { GiFern } from 'react-icons/gi';

export default function SoftSkill() {
  return (
    <div className="flex w-xl max-w-full flex-col items-center justify-center">
      <div>
        <p className="flex items-center gap-2 font-semibold md:gap-3">
          <GiFern className="h-7 w-7" />
          Soft Skills
        </p>
      </div>
      <div className="mt-4 grid grid-cols-1 items-center gap-4">
        {SoftSkills.map((skill, index) => (
          <div
            key={index}
            className="relative mb-4 flex w-sm max-w-full flex-col items-start justify-center gap-2 bg-yellow-100 p-3 shadow-2xl transition-all hover:scale-105"
          >
            <h3 className="font-bold">{skill.title}</h3>
            <p className="text-gray-700">{skill.description}</p>
            <div className="absolute -top-3 -left-4 h-4 w-24 -rotate-12 bg-orange-200/50 shadow-sm"></div>
            <div className="absolute -right-2 -bottom-2 h-4 w-20 rotate-6 bg-green-200/40 shadow-sm"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
