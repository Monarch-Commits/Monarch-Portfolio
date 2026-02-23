import { stacksByProject, techIcons } from '@/app/constant/Constant';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import UpdateProjectForm from '../UpdateProject';
import DeleteButton from '../DeleteButton';

interface User {
  id?: string;
  name: string | null;
  imageUrl: string | null;
}

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string | null;
  repoUrl: string | null;
  user: User | null;
}

export default function ProjectChild({
  p,
  index,
}: {
  p: Project;
  index: number;
}) {
  return (
    <article
      className={`relative mb-4 flex break-inside-avoid flex-col gap-4 border-2 bg-orange-50 p-4 shadow-sm transition-all hover:shadow-xl md:mx-2 dark:bg-orange-50 ${
        index % 3 === 0
          ? 'md:rotate-2'
          : index % 3 === 1
            ? 'md:-rotate-3'
            : 'md:rotate-3'
      }`}
    >
      {/* TAPE EFFECT */}
      <span
        className={`absolute z-50 h-5 w-20 rotate-12 bg-green-200/40 shadow-sm ${
          index % 3 === 0
            ? 'top-0 -right-6'
            : index % 3 === 1
              ? '-right-6 bottom-0'
              : 'top-0 -right-6 rotate-60'
        } `}
      />
      <span className="absolute top-0 -left-6 z-50 h-5 w-20 -rotate-12 bg-orange-200/50 shadow-sm" />

      {/* USER */}
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={p.user?.imageUrl || ''} />
          <AvatarFallback>
            {p.user?.name?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="text-muted-foreground text-sm">{p.user?.name}</span>
      </div>

      {/* TITLE */}
      <h2 className="text-lg font-semibold tracking-tight md:text-2xl dark:text-black">
        {p.title}
      </h2>

      {/* DESCRIPTION */}
      <div className="group relative">
        <p className="text-muted-foreground line-clamp-4 text-sm transition-all duration-500 group-hover:opacity-10 group-hover:blur-[1px]">
          {p.description}
        </p>

        <div className="pointer-events-none absolute -inset-2 z-10 translate-y-2 scale-95 rotate-1 opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100">
          <div className="relative rounded-sm bg-orange-50 p-4 text-sm text-gray-700 shadow-2xl ring-1 ring-black/5">
            <p className="leading-relaxed">{p.description}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        {p.liveUrl && (
          <Link href={p.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="bg-orange-700 text-white shadow-md hover:bg-orange-600"
            >
              View Project
            </Button>
          </Link>
        )}

        {p.repoUrl && (
          <Link href={p.repoUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              variant="outline"
              className="border-orange-300 text-orange-700 hover:bg-orange-100"
            >
              Source Code
            </Button>
          </Link>
        )}
      </div>

      {/* IMAGE */}
      <div className="group/image w-full overflow-hidden rounded-xl shadow-lg">
        <Image
          src={p.imageUrl}
          alt={p.title || 'Project Image'}
          width={800}
          height={600}
          priority
          className="h-auto w-full object-cover transition-transform duration-500 group-hover/image:scale-105"
        />
      </div>
      <div className="flex items-center justify-between">
        <UpdateProjectForm product={p} />
        <DeleteButton id={p.id} />
      </div>

      {/* STACK ICONS */}
      <div className="mt-2 flex flex-wrap gap-2">
        {stacksByProject[index % stacksByProject.length].map((tech) => {
          const TechIcon = techIcons[tech].icon;

          return (
            <div
              key={tech}
              className="flex items-center justify-center rounded-full bg-white/70 p-2 shadow-sm backdrop-blur-sm transition-all hover:scale-110 hover:shadow-md"
            >
              <TechIcon className={`${techIcons[tech].color} h-5 w-5`} />
            </div>
          );
        })}
      </div>
    </article>
  );
}
