import getProject from '@/app/actions/post/getProject.action';
import { stacksByProject, techIcons } from '@/app/constant/Constant';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default async function AllProject() {
  const project = await getProject();
  return (
    <div className="columns-1 space-y-2 [column-fill:balance] sm:columns-2 md:space-y-4 lg:columns-3">
      {project?.data?.length === 0 && (
        <p className="text-muted-foreground">No Project Found</p>
      )}

      {project?.data?.map((prod, index) => (
        <article
          key={prod.id}
          className={`relative z-0 flex break-inside-avoid flex-col gap-4 border-2 bg-orange-50 p-4 shadow-sm transition-all hover:shadow-xl md:mx-2 dark:bg-orange-50 ${
            index % 3 === 0
              ? 'md:rotate-2'
              : index % 3 === 1
                ? 'md:-rotate-3'
                : 'md:rotate-3'
          } `}
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
              <AvatarImage src={prod.user?.imageUrl || ''} />
              <AvatarFallback>
                {prod.user?.name?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground text-sm">
              {prod.user?.name}
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-lg font-semibold tracking-tight md:text-2xl dark:text-black">
            {prod.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-muted-foreground line-clamp-4 text-sm">
            {prod.description}
          </p>
          <div className="flex gap-4">
            <Link href={prod.liveUrl || ''}>
              <Button
                variant="outline"
                size={'sm'}
                className="border-orange-300 bg-orange-100 text-orange-900 shadow-sm hover:bg-orange-200 dark:text-orange-300"
              >
                View Project
              </Button>
            </Link>

            <Link href={prod.repoUrl || ''}>
              <Button
                size={'sm'}
                variant="outline"
                className="border-orange-300 bg-orange-100 text-orange-900 shadow-sm hover:bg-orange-200 dark:text-orange-300"
              >
                Source Code
              </Button>
            </Link>
          </div>

          {/* IMAGE */}
          <div className="w-full overflow-hidden rounded-md shadow-lg">
            <Image
              src={prod.imageUrl}
              alt={prod.title}
              width={800}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
          {/* STACK ICONS */}
          <div className="mt-2 flex flex-wrap gap-2">
            {stacksByProject[index % stacksByProject.length].map((tech) => {
              const TechIcon = techIcons[tech].icon;
              return (
                <div
                  key={tech}
                  className="flex items-center justify-center rounded-full p-2 text-orange-800 transition-transform hover:scale-110"
                >
                  <TechIcon className={`${techIcons[tech].color} h-5 w-5`} />
                </div>
              );
            })}
          </div>
        </article>
      ))}
    </div>
  );
}
