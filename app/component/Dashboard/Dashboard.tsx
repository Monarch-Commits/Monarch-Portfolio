import DashboardImage from './DashboardImage';
import { LayoutTextFlipDemo } from './DashboardText';

export default function Dashboard() {
  return (
    <div className="flex w-full flex-col items-center justify-around sm:pt-10 md:flex-row md:p-0">
      <LayoutTextFlipDemo />
      <DashboardImage />
    </div>
  );
}
