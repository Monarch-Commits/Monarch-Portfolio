export default function SkillsHeader() {
  return (
    <div className="mb-10 space-y-3 text-center">
      <h2
        className="bg-linear-to-r from-orange-700 via-orange-600 to-blue-900 bg-clip-text py-2 text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl"
        style={{ fontFamily: 'var(--font-rounded), sans-serif' }}
      >
        Skills and Expertise
      </h2>
      <p className="mx-auto max-w-md text-balance text-gray-500">
        The tools and technologies I frequently use to build amazing web
        applications:
      </p>
    </div>
  );
}
