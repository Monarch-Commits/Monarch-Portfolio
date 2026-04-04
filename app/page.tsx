import AboutMe from './components/AboutMe/AboutMe';
import ChatBox from './components/AiAssistant/AiAssistant';
import BackgroundArt from './components/BackgroundArt/BackgroundArt';
import Contact from './components/Contact/Contact';
import HeroSection from './components/HeroSection/Hero';
import Experience from './components/Experience/Experience';
import { Navigation } from './components/Navbar-Component/Navigation';
import Project from './components/Project/Project';
import SkillsSection from './components/Skills/Skills';

export default function Home() {
  return (
    <main className="flex max-w-screen flex-col items-center justify-center pb-10">
      <Navigation />
      <BackgroundArt />
      <HeroSection />
      <AboutMe />
      <Project />
      <SkillsSection />
      <Experience />
      <Contact />
      <ChatBox />
    </main>
  );
}
