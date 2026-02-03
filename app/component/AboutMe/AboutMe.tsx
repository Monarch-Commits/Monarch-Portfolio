import SecondPageAboutMe from './SecondPageAboutMe';
import FirstPageAboutMe from './FirstPageAboutMe';

export default function AboutMe() {
  return (
    <section
      id="About"
      className="flex min-h-screen w-full flex-col items-center justify-center pt-14 md:pt-28"
    >
      <FirstPageAboutMe />
      <SecondPageAboutMe />
    </section>
  );
}
