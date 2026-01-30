import AboutMe from './component/AboutMe/AboutMe';
import Dashboard from './component/Dashboard/Dashboard';

export default function Home() {
  return (
    <main className="flex max-w-screen flex-col items-center justify-center">
      <Dashboard />
      <AboutMe />
    </main>
  );
}
