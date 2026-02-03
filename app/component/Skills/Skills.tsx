import SoftSkills from './SoftSkill';
import TechnicalSkills from './TechnicalSkills';

export default function SkillsSection() {
  return (
    <section className="mt-2 flex w-full max-w-full flex-col items-center justify-center px-1 shadow-sm md:mt-20 md:flex-row md:px-6 lg:mx-0">
      <TechnicalSkills />
      <SoftSkills />
    </section>
  );
}
