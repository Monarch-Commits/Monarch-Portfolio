import SecondPageAboutMe from './SecondPageAboutMe';
import FirstPageAboutMe from './FirstPageAboutMe';

export default function AboutMe() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center pt-10 md:pt-2 dark:bg-gray-900">
      <FirstPageAboutMe />
      <SecondPageAboutMe />
    </section>
  );
}
