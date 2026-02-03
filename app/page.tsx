import AboutMe from './component/AboutMe/AboutMe';
import Dashboard from './component/Dashboard/Dashboard';
// import Experience from './component/Experience/Experience';
import Project from './component/Project/Project';
import SkillsSection from './component/Skills/Skills';

export default function Home() {
  return (
    <main className="flex max-w-screen flex-col items-center justify-center pb-10">
      <Dashboard />
      <AboutMe />
      <Project />
      <SkillsSection />
      {/* <Experience /> */}
    </main>
  );
}
