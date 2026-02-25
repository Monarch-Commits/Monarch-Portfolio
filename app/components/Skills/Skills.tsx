import SkillsHeader from './SkillsHeader';
import SkillsStacks from './SkillsStacks';
import SoftSkills from './SoftSkill';
import TechnicalSkills from './TechnicalSkills';

export default function SkillsSection() {
  return (
    <section
      id="Skills"
      className="flex w-full max-w-7xl flex-col items-center justify-center px-1 pt-14 md:px-6 md:pt-28"
    >
      <SkillsHeader />
      <SkillsStacks />
      <TechnicalSkills />
      <SoftSkills />
    </section>
  );
}
