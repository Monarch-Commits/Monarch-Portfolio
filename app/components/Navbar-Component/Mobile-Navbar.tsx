'use client';
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
  return (
    <div className="flex flex-col items-center justify-center gap-3 md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <IoMenuSharp />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <div className="flex flex-col items-start justify-start gap-3 md:hidden">
              {pages.map((p, index) => (
                <DropdownMenuItem key={index} asChild>
                  <Link
                    href={p.href}
                    className="flex w-full cursor-pointer items-center gap-2"
                  >
                    <p.icon />
                    <span>{p.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
