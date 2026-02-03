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
