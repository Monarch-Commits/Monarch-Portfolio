import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from './Dark-Mode/toggleMode';
import MobileNavbar from './Mobile-Navbar';

import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { IoIosLogOut } from 'react-icons/io';

import { IoCreateOutline } from 'react-icons/io5';
import asyncUser from '@/app/actions/user/user.action';
import { pages } from '@/app/constant/Constant';
import { Button } from '@/app/components/ui/button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/components/ui/avatar';

export default async function DesktopNavbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  if (user) {
    await asyncUser();
  }
  return (
    <div className="relative flex w-full items-center justify-between">
      <div>
        <Link href={'/'}>
          <Image
            src="https://drive.google.com/uc?export=view&id=1czPtHOnb06NAo-awhCgsOgO_uHXNEUVU"
            width={40}
            height={40}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className="hidden items-center justify-center gap-3 md:flex">
          {pages.map((p, index) => {
            const Icon = p.icon;
            return (
              <Link key={index} href={p.href}>
                <Button
                  variant={'ghost'}
                  className="font-medium transition-transform duration-200 ease-out hover:scale-110 active:scale-95"
                >
                  <Icon /> {p.name}
                </Button>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-3">
          <MobileNavbar />

          {user ? (
            <div className="flex flex-row items-center gap-3">
              <>
                <Link href="/Create">
                  <Button
                    variant="ghost"
                    className="h-12.5 w-12.5 rounded-full"
                    size="sm"
                  >
                    <IoCreateOutline />
                  </Button>
                </Link>

                <Button variant="ghost">
                  <LogoutLink>
                    <IoIosLogOut />
                  </LogoutLink>
                </Button>
                <Avatar>
                  <AvatarImage src={user?.picture || ''} />
                  <AvatarFallback>{user?.given_name?.charAt(0)}</AvatarFallback>
                </Avatar>
              </>
            </div>
          ) : (
            <Button variant={'destructive'}>
              <LoginLink>Sign in</LoginLink>
            </Button>
          )}
        </div>

        <ModeToggle />
      </div>
    </div>
  );
}
