import { LuHouse } from 'react-icons/lu';
import { IoCodeSlash } from 'react-icons/io5';
import { GoBriefcase } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineCall } from 'react-icons/md';
import type { IconType } from 'react-icons';

export const pages: { name: string; href: string; icon: IconType }[] = [
  { name: 'Home', href: '/', icon: LuHouse },
  { name: 'Skills', href: '#', icon: IoCodeSlash },
  { name: 'Experience', href: '#', icon: GoBriefcase },
  { name: 'About', href: '#', icon: CgProfile },
  { name: 'Contact', href: '#', icon: MdOutlineCall },
];
