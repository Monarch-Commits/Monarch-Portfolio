import { getPrivateProject } from '@/app/actions/post/getProject.action';
import ProjectChild from './ProjectChild';
export default async function Project() {
  const project = await getPrivateProject();
  return (
    <div className="columns-1 space-y-4 sm:columns-2 lg:columns-3">
      {project?.data.map((p, index) => (
        <ProjectChild key={p.id} p={p} index={index} />
      ))}
    </div>
  );
}
