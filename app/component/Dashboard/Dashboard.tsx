import DashboardImage from './DashboardImage';
import { LayoutTextFlipDemo } from './DashboardText';

export default function Dashboard() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center gap-10 px-6 md:flex-row md:gap-20">
      <LayoutTextFlipDemo />
      <DashboardImage />
    </section>
  );
}
