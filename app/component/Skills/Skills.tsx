import SoftSkills from './SoftSkill';
import TechnicalSkills from './TechnicalSkills';

export default function SkillsSection() {
  return (
    <section
      id="Skills"
      className="flex w-full max-w-full flex-col items-center justify-center px-1 pt-14 md:flex-row md:px-6 md:pt-28 lg:mx-0"
    >
      <TechnicalSkills />
      <SoftSkills />
    </section>
  );
}
