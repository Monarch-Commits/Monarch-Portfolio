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
        <p className="text-gray-500">
          Selected projects showcasing my work in building efficient,
          responsive, and innovative web applications.
        </p>

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
