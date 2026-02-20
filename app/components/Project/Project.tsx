import AllProject from './BestProject/AllProject';
import ProjectHeader from './ProjectHeader';

export default function Project() {
  return (
    <section
      id="Projects"
      className="w-full max-w-7xl overflow-x-hidden px-1 pt-14 md:overflow-x-visible md:px-6 md:pt-28"
    >
      <ProjectHeader />
      <AllProject />
    </section>
  );
}
