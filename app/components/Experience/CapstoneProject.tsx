import { experiences } from '@/app/constant/Constant';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ExperiencePage() {
  return (
    <section className="mx-auto w-full max-w-4xl pt-2 md:pt-10">
      {/* Experience List */}
      <div className="flex flex-col gap-4 md:gap-10">
        {experiences.map((item, index) => (
          <article
            key={index}
            className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6 shadow-sm transition hover:shadow-md sm:p-8"
          >
            {/* Top */}
            <div className="mb-4 flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-wide text-orange-600 uppercase">
                {item.title}
              </span>
              <h2 className="text-xl font-bold text-gray-900">{item.role}</h2>
              <p className="text-sm font-medium text-gray-700">
                {item.institution}
              </p>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>

            {/* Description */}
            <ul className="mb-5 list-disc space-y-2 pl-5 text-xs leading-relaxed text-gray-600 md:text-sm">
              {item.description.map((desc, i) => (
                <li key={i} className="marker:text-orange-400">
                  {desc}
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {item.tech.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full border border-orange-100 bg-white px-3 py-1 text-xs font-medium text-orange-700 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            {item.buttons && (
              <div className="mt-6 flex flex-wrap gap-2">
                {item.buttons.map((button, i) => (
                  <Link
                    key={i}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant={i === 0 ? 'outline' : 'secondary'}
                      className={`shadow-sm ${
                        i === 0
                          ? 'border-orange-200 bg-orange-700 text-white hover:bg-orange-600 hover:text-white'
                          : 'border-orange-200 bg-orange-100 text-orange-800 hover:bg-orange-200 hover:text-orange-900'
                      }`}
                    >
                      {button.name}
                    </Button>
                  </Link>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
