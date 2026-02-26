import { Suspense } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Create from '../components/Add-Update-Delete/Create';
import Project from '../components/Add-Update-Delete/GetProject/Project';
import ProjectSkeleton from '../components/Project/BestProject/Loading';
import { LuHouse } from 'react-icons/lu';
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/server';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getDbUser } from '../actions/user/user.action';
import { redirect } from 'next/navigation';

export default async function Page() {
  let user;

  try {
    user = await getDbUser();
  } catch {
    redirect('/');
  }

  return (
    <main className="container mx-auto w-screen space-y-10 p-6">
      {/* Header Section */}
      <section className="flex w-full flex-col items-start justify-between space-y-6 sm:flex-row">
        {user ? (
          <div className="flex max-w-md flex-col gap-4">
            <h1 className="text-2xl font-bold">Add New Project</h1>

            {/* User Info */}
            <div className="flex items-center gap-3">
              <Create />

              <Avatar>
                <AvatarImage src={user.imageUrl || ''} />
                <AvatarFallback>{user.name}</AvatarFallback>
              </Avatar>

              <LogoutLink>
                <Button variant="outline">Logout</Button>
              </LogoutLink>
            </div>
          </div>
        ) : (
          <div className="flex gap-3">
            <LoginLink>
              <Button variant="destructive">Sign in</Button>
            </LoginLink>

            <RegisterLink>
              <Button variant="secondary">Sign up</Button>
            </RegisterLink>
          </div>
        )}
        <div>
          <Link href="/">
            <Button
              variant="outline"
              className="flex items-center gap-2 border-orange-300 text-orange-700 hover:bg-orange-100"
            >
              <LuHouse />
              Home
            </Button>
          </Link>
        </div>
      </section>

      <hr />

      {/* Projects Section */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">My Projects</h2>
        <Suspense fallback={<ProjectSkeleton />}>
          <Project />
        </Suspense>
      </section>
    </main>
  );
}
