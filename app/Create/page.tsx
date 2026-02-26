import { Suspense } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Create from '../components/Add-Update-Delete/Create';
import Project from '../components/Add-Update-Delete/GetProject/Project';
import ProjectSkeleton from '../components/Project/BestProject/Loading';
import { LuHouse } from 'react-icons/lu';
import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getDbUser } from '../actions/user/user.action';

export default async function Page() {
  const result = await getDbUser();

  // NOT LOGGED IN
  if (result === null) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoginLink>
          <Button variant="destructive">Sign in</Button>
        </LoginLink>
      </div>
    );
  }

  // NON-OWNER
  if (result === 'UNAUTHORIZED') {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl font-bold text-red-600">Unauthorized</h1>
        <p className="text-gray-600">
          You do not have permission to access this page.
        </p>

        <div className="flex gap-3">
          {/* Logout so they can login as the owner */}
          <LogoutLink>
            <Button variant="outline">Logout</Button>
          </LogoutLink>

          <Link href="/">
            <Button variant="secondary">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  // OWNER
  const user = result;

  return (
    <main className="container mx-auto w-screen space-y-10 p-6">
      {/* Header Section */}
      <section className="flex w-full flex-col items-start justify-between space-y-6 sm:flex-row">
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
