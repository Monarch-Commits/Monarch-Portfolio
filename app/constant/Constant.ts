import { LuHouse } from 'react-icons/lu';
import { IoCodeSlash } from 'react-icons/io5';
import { GoBriefcase } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineCall } from 'react-icons/md';
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

type ExperienceItem = {
  title: string;
  role: string;
  institution: string;
  date: string;
  description: string[];
  tech: string[];
  buttons?: string[];
};

// data for navigation pages
export const pages: { name: string; href: string; icon: IconType }[] = [
  { name: 'Home', href: '/', icon: LuHouse },
  { name: 'Skills', href: '#Skills', icon: IoCodeSlash },
  { name: 'About', href: '#About', icon: GoBriefcase },
  { name: 'Projects', href: '#Projects', icon: CgProfile },
  { name: 'Contact', href: '#Contact', icon: MdOutlineCall },
];

// data for about me personal info
export const AboutMePersonalInfo = [
  { label: 'Age', value: '20' },
  { label: 'Location', value: 'Davao' },
  { label: 'Education', value: 'Information System' },
  {
    label: 'Interests',
    value: 'Web Development, Front-End Development',
  },
  {
    label: 'Email',
    value: 'monarch5827@gmail.com',
    break: true,
  },
  { label: 'Phone', value: '+63 927 654 5827' },
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
    title: 'Clean Coding',
    description: 'Writing code that is easy to read, understand, and maintain.',
  },
  {
    title: 'Responsive Design',
    description:
      'Creating web applications that work seamlessly across all devices and screen sizes.',
  },
  {
    title: 'User-Centered Approach',
    description:
      'Focusing on the needs and preferences of users to deliver optimal user experiences.',
  },
];

export const SoftSkills = [
  {
    title: 'Time Management',
    description:
      'Efficiently organizing and prioritizing tasks to maximize productivity.',
  },
  {
    title: 'Problem Solving',
    description:
      'Analyzing challenges and finding effective solutions to overcome obstacles in projects and workflows.',
  },
  {
    title: 'Adaptability & Learning',
    description:
      'Quickly learning new tools and adjusting to changing project requirements to maintain high-quality results.',
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
