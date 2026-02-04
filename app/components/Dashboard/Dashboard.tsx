import DashboardImage from './DashboardImage';
import { LayoutTextFlipDemo } from './DashboardText';

export default function Dashboard() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-10 px-6 pt-14 md:flex-row md:gap-20 md:pt-45">
      <LayoutTextFlipDemo />
      <DashboardImage />
    </section>
  );
}
