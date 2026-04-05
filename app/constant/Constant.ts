import { LuHouse } from 'react-icons/lu';
import {
  IoBriefcaseOutline,
  IoCodeSlash,
  IoLogoJavascript,
} from 'react-icons/io5';
import { GoBriefcase } from 'react-icons/go';
import type { IconType } from 'react-icons';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiPostgresql, SiPrisma } from 'react-icons/si';
import {
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
  SiChakraui,
} from 'react-icons/si';
type ExperienceButton = {
  name: string;
  href: string;
};
type ExperienceItem = {
  title: string;
  role: string;
  institution: string;
  date: string;
  description: string[];
  tech: string[];
  buttons?: ExperienceButton[];
};

// data for navigation pages
export interface PageItem {
  name: string;
  href: string;
  icon: IconType;
}

export const pages: PageItem[] = [
  { name: 'Home', href: '#Home', icon: LuHouse },
  { name: 'About', href: '#About', icon: GoBriefcase },
  { name: 'Skills', href: '#Skills', icon: IoCodeSlash },
  { name: 'Experience', href: '#Experience', icon: IoBriefcaseOutline },
];

// data for about me personal info
export const AboutMePersonalInfo = [
  { label: 'Name', value: 'Monarch Pagcas' },
  { label: 'Location', value: 'Davao City, Philippines' },
  { label: 'Education', value: 'Information System' },
  {
    label: 'Interests',
    value: 'Web Development',
  },
];

// data for stack used in projects
export const stack = [
  {
    name: 'React',
  },
  {
    name: 'Next.js',
  },
  { name: 'TypeScript' },
  {
    name: 'Tailwind CSS',
  },
  {
    name: 'Prisma',
  },
  { name: 'PostgreSQL' },
];

// data for skills with icons
export const skills: { name: string; icons: IconType; color: string }[] = [
  {
    name: 'React',
    icons: FaReact,
    color: 'text-cyan-400',
  },
  {
    name: 'Next.js',
    icons: TbBrandNextjs,
    color: 'text-gray-900',
  },
  {
    name: 'TypeScript',
    icons: TbBrandTypescript,
    color: 'text-cyan-400',
  },
  {
    name: 'JavaScript',
    icons: IoLogoJavascript,
    color: 'text-yellow-400',
  },
  {
    name: 'Tailwind CSS',
    icons: RiTailwindCssFill,
    color: 'text-cyan-500',
  },
  {
    name: 'Prisma',
    icons: SiPrisma,
    color: 'text-slate-900',
  },
  {
    name: 'PostgreSQL',
    icons: SiPostgresql,
    color: 'text-blue-800',
  },
  {
    name: 'Firebase',
    icons: SiFirebase,
    color: 'text-orange-500',
  },
];

export const creativeProcess = [
  {
    title: 'Plan',
    description:
      'This is where I figure out what the project is about. I define the goal, list the features, and understand who the users are.',
  },
  {
    title: 'Design',
    description:
      'I plan how the website will look and feel. I make sure the layout is clean, simple, and easy to use. Nothing complicated, just user-friendly.',
  },
  {
    title: 'Develop',
    description:
      'This is where I start coding. I build the components and make everything work. I try to keep my code clean and easy to understand.',
  },
  {
    title: 'Test',
    description:
      'I check if everything is working properly. I click buttons, test forms, and look for errors. If something’s wrong, I fix it right away.',
  },
  {
    title: 'Deploy',
    description:
      'I put the project online so others can see and use it. This is when it becomes a real, live website.',
  },
  {
    title: 'Review',
    description:
      'I go back and improve the project.I fix small issues, improve the design, and sometimes ask for feedback.There’s always something to make better.',
  },
];

export const SoftSkills = [
  {
    title: 'Time Management',
    description:
      'I organize my tasks and focus on what needs to be done first. This helps me stay on track and finish work on time without cramming.',
  },
  {
    title: 'Problem Solving',
    description:
      'When I run into problems, I take time to understand them and figure out simple ways to fix them. I don’t rush, I solve things step by step.',
  },
  {
    title: 'Adaptability & Learning',
    description:
      'I’m open to learning new tools and trying different approaches. If something changes in the project, I adjust and keep going.',
  },
  {
    title: 'Attention to Detail',
    description:
      'I pay attention to small details, especially in design and code. I like making sure everything looks clean and works properly.',
  },
  {
    title: 'Communication',
    description:
      'I try to explain things clearly and keep everything easy to understand. I also listen to feedback and use it to improve my work.',
  },
  {
    title: 'Responsibility',
    description:
      'I take my work seriously and make sure I finish what I start. Even when things get hard, I stay consistent and keep working on it.',
  },
];

// data for experiences
export const experiences: ExperienceItem[] = [
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
    buttons: [
      {
        name: 'View Project',
        href: 'https://studentrecording.vercel.app/',
      },
      {
        name: 'View Certificate',
        href: 'https://drive.google.com/file/d/10w7-9CENdC5l5fpOgAj6tTaTqgj6DUGQ/preview',
      },
    ],
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
    buttons: [
      {
        name: 'View Project',
        href: 'https://libraryholding.vercel.app/',
      },
      {
        name: 'View Documentation',
        href: 'https://drive.google.com/file/d/11FKfn6ILRg7Nry9gOfNd0HCFw-6y6GsK/preview',
      },
    ],
  },
];

// Mapping tech name → icon + color
export const techIcons: Record<string, { icon: IconType; color: string }> = {
  Javascript: { icon: SiJavascript, color: 'text-yellow-400' },
  Tailwind: { icon: SiTailwindcss, color: 'text-teal-400' },
  Firebase: { icon: SiFirebase, color: 'text-orange-500' },
  Nextjs: { icon: SiNextdotjs, color: 'text-gray-900' },
  'Chakra UI': { icon: SiChakraui, color: 'text-cyan-400' },
};

// Tech stacks per project
export const stacksByProject = [
  ['Javascript', 'Firebase', 'Tailwind'], //  0
  ['Javascript', 'Firebase', 'Tailwind'], //  1
  ['Nextjs', 'Chakra UI'], //  2
];
