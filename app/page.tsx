import AboutMe from './components/AboutMe/AboutMe';
import BackgroundArt from './components/BackgroundArt/BackgroundArt';
import Contact from './components/Contact/Contact';
import Dashboard from './components/Dashboard/Dashboard';
import Experience from './components/Experience/Experience';
import { FireflySwarm } from './components/FireflyAnimation/FireflySwarm';
import { Navigation } from './components/Navbar-Component/Navigation';
import Project from './components/Project/Project';
import SkillsSection from './components/Skills/Skills';

export default function Home() {
  return (
    <main className="flex max-w-screen flex-col items-center justify-center pb-10">
      <Navigation />
      <FireflySwarm />
      <BackgroundArt />
      <Dashboard />
      <AboutMe />
      <Project />
      <SkillsSection />
      <Experience />
      <Contact />
    </main>
  );
}
