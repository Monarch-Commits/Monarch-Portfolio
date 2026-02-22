import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Dashboard from './components/Dashboard/Dashboard';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import SkillsSection from './components/Skills/Skills';
import { FireflySwarm } from './components/Test/Test';

export default function Home() {
  return (
    <main className="flex max-w-screen flex-col items-center justify-center pb-10">
      <FireflySwarm />
      <Dashboard />
      <AboutMe />
      <Project />
      <SkillsSection />
      <Experience />
      <Contact />
    </main>
  );
}
