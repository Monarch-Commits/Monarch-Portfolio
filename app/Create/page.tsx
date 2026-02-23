export const dynamic = 'force-dynamic';
import Create from '../components/Add-Update-Delete/Create';
import Project from '../components/Add-Update-Delete/Project';

export default function Page() {
  return (
    <main className="container mx-auto space-y-10 p-6">
      <section>
        <h1 className="mb-4 text-2xl font-bold">Add New Project</h1>
        <Create />
      </section>

      <hr />

      <section>
        <h2 className="mb-4 text-2xl font-bold">My Projects</h2>
        <Project />
      </section>
    </main>
  );
}
