import { Suspense } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import Create from '../components/Add-Update-Delete/Create';
import Project from '../components/Add-Update-Delete/GetProject/Project';
import ProjectSkeleton from '../components/Project/BestProject/Loading';
import { LuHouse } from 'react-icons/lu';

export default function Page() {
  return (
    <main className="container mx-auto space-y-10 p-6">
      <section>
        <h1 className="mb-4 text-2xl font-bold">Add New Project</h1>
        <div className="flex max-w-md items-center justify-start gap-3">
          <Create />
          <Link href="/">
            <Button
              variant="outline"
              className="border-orange-300 text-orange-700 hover:bg-orange-100"
            >
              <LuHouse />
              Home
            </Button>
          </Link>
        </div>
      </section>

      <hr />

      <section>
        <h2 className="mb-4 text-2xl font-bold">My Projects</h2>
        <Suspense fallback={<ProjectSkeleton />}>
          <Project />
        </Suspense>
      </section>
    </main>
  );
}
