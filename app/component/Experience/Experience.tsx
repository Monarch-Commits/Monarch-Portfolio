import CapstoneProject from './CapstoneProject';
import OJTProject from './OJTProject';

export default function Experience() {
  return (
    <div className="flex w-full max-w-full flex-col items-center justify-center border border-orange-400 px-1 pt-14 md:px-6 md:pt-28 lg:mx-0">
      <div className="w-full">
        <h1
          className="mb-6 text-3xl font-semibold md:text-5xl"
          style={{ fontFamily: "'Momo Signature', cursive" }}
        >
          Experiences
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          The tools and technologies I frequently use to build amazing web
          applications:
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-around pb-6 md:flex-row">
        <CapstoneProject />
        <OJTProject />
      </div>
    </div>
  );
}
