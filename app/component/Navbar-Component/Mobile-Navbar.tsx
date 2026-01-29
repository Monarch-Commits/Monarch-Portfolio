import Link from 'next/link';
import { IoMenuSharp } from 'react-icons/io5';

import { pages } from '@/app/constant/Constant';
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/app/components/ui/dropdown-menu';
import { Button } from '@/app/components/ui/button';

export default function MobileNavbar() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <IoMenuSharp />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <div className="flex flex-col items-start justify-start gap-3 md:hidden">
              {pages.map((p, index) => {
                const Icon = p.icon;
                return (
                  <Link key={index} href={p.href}>
                    <Button variant={'ghost'} className="font-semibold">
                      <Icon /> {p.name}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
