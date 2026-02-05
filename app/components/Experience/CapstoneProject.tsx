import { experiences } from '@/app/constant/Constant';
import { Button } from '@/components/ui/button';

export default function ExperiencePage() {
  return (
    <section className="mx-auto w-full max-w-4xl pt-2 md:pt-10">
      {/* Experience List */}
      <div className="flex flex-col gap-4 md:gap-10">
        {experiences.map((item, index) => (
          <article
            key={index}
            className="rounded-2xl border bg-orange-50 p-6 shadow-sm transition hover:shadow-md sm:p-8 dark:bg-orange-100 dark:text-black"
          >
            {/* Top */}
            <div className="mb-4 flex flex-col gap-1">
              <span className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                {item.title}
              </span>
              <h2 className="text-xl font-semibold">{item.role}</h2>
              <p className="text-sm text-gray-600">{item.institution}</p>
              <p className="text-xs text-gray-600">{item.date}</p>
            </div>

            {/* Description */}
            <ul className="mb-5 list-disc space-y-2 pl-5 text-xs leading-relaxed text-gray-600 md:text-sm">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {item.tech.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-orange-800 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Buttons */}
            {item.buttons && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.buttons.map((button, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="sm"
                    className="border-orange-300 bg-orange-100 text-orange-900 shadow-sm hover:bg-orange-200 dark:text-orange-300"
                  >
                    {button}
                  </Button>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
