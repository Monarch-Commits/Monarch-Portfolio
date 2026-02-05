import { stack } from '@/app/constant/Constant';
import { Button } from '@/components/ui/button';
import { HiArrowTrendingDown } from 'react-icons/hi2';

export default function ProjectHeader() {
  return (
    <header className="mb-10 p-2">
      <h1
        className="mb-6 text-3xl font-semibold md:text-5xl"
        style={{ fontFamily: "'Momo Signature', cursive" }}
      >
        My Creative Works
      </h1>

      {/* TECH STACK */}
      <div className="relative flex flex-wrap gap-3">
        {stack.map((tech) => (
          <Button
            key={tech.name}
            variant="outline"
            size="sm"
            className="border-orange-300 bg-orange-100 text-orange-900 shadow-sm hover:bg-orange-200 dark:text-orange-300"
          >
            {tech.name}
          </Button>
        ))}
        <div
          style={{ fontFamily: "'Momo Signature', cursive" }}
          className="absolute right-2 bottom-1 hidden flex-col items-center justify-center font-semibold text-orange-500 md:flex"
        >
          <span>More</span>
          <span>Comming</span>
          <span>Soon!!</span>
          <HiArrowTrendingDown className="h-7 w-7" />
        </div>
      </div>
    </header>
  );
}
