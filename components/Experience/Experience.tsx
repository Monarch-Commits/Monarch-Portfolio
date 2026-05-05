import CapstoneProject from './CapstoneProject';
import ExperienceHeader from './ExperienceHeader';

export default function Experience() {
  return (
    <div
      id="Experience"
      className="flex w-full max-w-7xl flex-col items-center justify-center px-2 pt-14 md:px-6 md:pt-28 lg:mx-0"
    >
      <ExperienceHeader />
      <CapstoneProject />
    </div>
  );
}
