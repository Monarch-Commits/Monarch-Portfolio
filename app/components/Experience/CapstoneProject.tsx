import { Button } from '@/components/ui/button';
import React from 'react';

type ExperienceItem = {
  title: string;
  role: string;
  institution: string;
  date: string;
  description: string[];
  tech: string[];
  buttons?: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: 'On-the-Job Training',
    role: 'IT Support / System Developer',
    institution:
      'University of Southern Mindanao (USM) – Kidapawan City Campus',
    date: 'Feb 2025 – May 2025',
    description: [
      'Provided IT support by troubleshooting and repairing school laptops, printers, and other technical equipment.',
      'Assisted in setting up fiber internet connections and campus-wide Wi-Fi.',
      'Maintained computer laboratories and provided technical assistance to students, including ID processing.',
      'Developed a Student Profiling System to manage personal, academic, and ID information with real-time updates, search functionality, and secure authentication.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    buttons: ['View Project', 'Download Certificate'],
  },
  {
    title: 'Capstone Project',
    role: 'Library Holdings Management System',
    institution: 'Makilala Institute of Science and Technology',
    date: 'May 2024 – January 2025',
    description: [
      'Developed a centralized system to manage and track library collections, including books and journals.',
      'Implemented full CRUD operations, report generation, and subject-based monitoring.',
      'Designed the system to improve organization, reporting efficiency, and long-term monitoring of library resources.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    buttons: ['View Project', 'Download Documentation'],
  },
];

export default function ExperiencePage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      {/* Experience List */}
      <div className="flex flex-col gap-10">
        {experiences.map((item, index) => (
          <article
            key={index}
            className="rounded-2xl border bg-orange-50 p-6 shadow-sm transition hover:shadow-md sm:p-8"
          >
            {/* Top */}
            <div className="mb-4 flex flex-col gap-1">
              <span className="text-primary text-xs font-medium tracking-wide uppercase">
                {item.title}
              </span>
              <h2 className="text-xl font-semibold">{item.role}</h2>
              <p className="text-muted-foreground text-sm">
                {item.institution}
              </p>
              <p className="text-muted-foreground text-xs">{item.date}</p>
            </div>

            {/* Description */}
            <ul className="text-muted-foreground mb-5 list-disc space-y-2 pl-5 text-xs leading-relaxed md:text-sm">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {item.tech.map((tech, i) => (
                <span
                  key={i}
                  className="border-border bg-muted rounded-full border px-3 py-1 text-xs font-medium"
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
