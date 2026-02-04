'use client';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, ArrowUpRight } from 'lucide-react';

const socials = [
  {
    name: 'GitHub',
    handle: '@yourgithub',
    icon: <Github className="h-6 w-6" />,
    link: '#',
    gridClass: 'md:col-span-2', // Mas malapad itong box na 'to
    bg: 'hover:bg-zinc-900 hover:text-white',
  },
  {
    name: 'LinkedIn',
    handle: 'Connect',
    icon: <Linkedin className="h-6 w-6" />,
    link: '#',
    gridClass: 'md:col-span-1',
    bg: 'hover:bg-blue-50 hover:text-blue-600',
  },
  {
    name: 'Email',
    handle: 'Send a message',
    icon: <Mail className="h-6 w-6" />,
    link: 'mailto:your@email.com',
    gridClass: 'md:col-span-3', // Buong width sa ilalim
    bg: 'hover:bg-orange-50 hover:text-orange-600',
  },
];

export default function ModernSocials() {
  return (
    <div className="mx-auto mt-10 max-w-xl px-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {socials.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 ${item.gridClass} ${item.bg} `}
          >
            <div className="flex h-full flex-col justify-between gap-8">
              <div className="flex items-start justify-between">
                <div className="rounded-lg bg-gray-50 p-2 transition-colors group-hover:bg-transparent">
                  {item.icon}
                </div>
                <ArrowUpRight
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                  size={20}
                />
              </div>

              <div>
                <p className="text-sm font-medium tracking-tighter uppercase opacity-60">
                  {item.name}
                </p>
                <p className="text-lg font-bold tracking-tight">
                  {item.handle}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
