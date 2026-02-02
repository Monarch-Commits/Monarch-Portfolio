import { LuHouse } from 'react-icons/lu';
import { IoCodeSlash } from 'react-icons/io5';
import { GoBriefcase } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineCall } from 'react-icons/md';
import type { IconType } from 'react-icons';

export const pages: { name: string; href: string; icon: IconType }[] = [
  { name: 'Home', href: '/', icon: LuHouse },
  { name: 'Skills', href: '#Skills', icon: IoCodeSlash },
  { name: 'About', href: '#About', icon: GoBriefcase },
  { name: 'Projects', href: '#Projects', icon: CgProfile },
  { name: 'Contact', href: '#Contact', icon: MdOutlineCall },
];

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
