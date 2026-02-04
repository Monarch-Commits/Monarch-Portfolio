import CapstoneProject from './CapstoneProject';
// import OJTProject from './OJTProject';

export default function Experience() {
  return (
    <div
      id="Experience"
      className="flex w-full max-w-7xl flex-col items-center justify-center px-1 pt-14 md:px-6 md:pt-28 lg:mx-0"
    >
      <div className="w-full">
        <h1
          className="mb-6 text-3xl font-semibold md:text-5xl"
          style={{ fontFamily: "'Momo Signature', cursive" }}
        >
          Experiences
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Hands-on experience in IT support, system development, and academic
          projects focused on real-world problem solving.
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-around pb-6 md:flex-row">
        <CapstoneProject />
        {/* <OJTProject /> */}
      </div>
    </div>
  );
}
