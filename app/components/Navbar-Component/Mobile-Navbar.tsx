// 'use client';
// import Link from 'next/link';
// import { IoMenuSharp } from 'react-icons/io5';
// import { pages } from '@/app/constant/Constant';
// import {
//   DropdownMenuTrigger,
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from '@/components/ui/dropdown-menu';
// import { Button } from '@/components/ui/button';

// export default function MobileNavbar() {
//   return (
//     <div className="flex items-center justify-center md:hidden">
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="outline" size="icon">
//             <IoMenuSharp />
//           </Button>
//         </DropdownMenuTrigger>

//         <DropdownMenuContent className="w-48">
//           {pages.map((p, index) => (
//             <DropdownMenuItem key={index} asChild>
//               <Link href={p.href} className="flex w-full items-center gap-2">
//                 <p.icon />
//                 <span>{p.name}</span>
//               </Link>
//             </DropdownMenuItem>
//           ))}
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IoMenuSharp } from 'react-icons/io5';
import { pages } from '@/app/constant/Constant';
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export default function MobileNavbar() {
  const [activeSection, setActiveSection] = useState('#Home');

  useEffect(() => {
    const sections = pages.map((p) =>
      document.getElementById(p.href.replace('#', '')),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-center justify-center md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <IoMenuSharp />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-48">
          {pages.map((p, index) => {
            const isActive = activeSection === p.href;

            return (
              <DropdownMenuItem key={index} asChild>
                <Link
                  href={p.href}
                  className={`flex w-full items-center gap-2 rounded-md px-2 py-1 transition-all duration-300 ${
                    isActive
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-600 hover:bg-orange-100'
                  }`}
                >
                  <p.icon />
                  <span>{p.name}</span>
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
