import AboutMe from './components/AboutMe/AboutMe';
import ChatBox from './components/AiAssistant/AiAssistant';
import BackgroundArt from './components/BackgroundArt/BackgroundArt';
import Contact from './components/Contact/Contact';
import Dashboard from './components/Dashboard/Dashboard';
import Experience from './components/Experience/Experience';
import FireflyWrapper from './components/FireflyAnimation/FireflyWrapper';
import { Navigation } from './components/Navbar-Component/Navigation';
import Project from './components/Project/Project';
import SkillsSection from './components/Skills/Skills';

export default function Home() {
  return (
    <main className="flex max-w-screen flex-col items-center justify-center pb-10">
      <Navigation />
      <FireflyWrapper />
      <BackgroundArt />
      <Dashboard />
      <AboutMe />
      <Project />
      <SkillsSection />
      <Experience />
      <Contact />
      <ChatBox />
    </main>
  );
}
