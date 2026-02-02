import AboutMe from './component/AboutMe/AboutMe';
import Dashboard from './component/Dashboard/Dashboard';
import Test from './component/Project/Test';

export default function Home() {
  return (
    <main className="flex max-w-screen flex-col items-center justify-center pb-10">
      <Dashboard />
      <AboutMe />
      <Test />
    </main>
  );
}
