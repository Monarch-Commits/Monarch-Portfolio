import DashboardImage from './HeroImage';
import { LayoutTextFlipDemo } from './HeroText';

export default function HeroSection() {
  return (
    <section
      id="Home"
      className="flex w-full flex-col items-center justify-center gap-10 px-6 pt-5 md:flex-row md:gap-20 md:pt-45"
    >
      <LayoutTextFlipDemo />
      <DashboardImage />
    </section>
  );
}
