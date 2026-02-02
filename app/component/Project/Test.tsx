import getProject from '@/app/actions/post/getProject.action';
import { stack } from '@/app/constant/Constant';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default async function Test() {
  const project = await getProject();
  console.log(project);

  return (
    <div className="flex w-full flex-col items-start justify-center px-1 py-10">
      <header className="w-full">
        <h1
          className="mb-6 text-3xl font-semibold md:text-5xl"
          style={{ fontFamily: "'Momo Signature', cursive" }}
        >
          My Creative Works
        </h1>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 p-2">
          {stack.map((tech) => (
            <Button
              key={tech.name}
              variant="outline"
              size="sm"
              className="border-orange-300 bg-orange-100 text-orange-900 shadow-sm transition-colors hover:bg-orange-200 dark:text-orange-300"
            >
              {tech.name}
            </Button>
          ))}
        </div>
      </header>
      <div className="z-10 grid min-w-full grid-cols-1 gap-4 overflow-hidden pt-10 sm:grid-cols-2 md:mt-0 lg:grid-cols-3">
        {project?.data.length === 0 ? (
          <div>No Project Found</div>
        ) : (
          project?.data.map((prod) => (
            <div
              key={prod.id}
              className="border-border relative z-20 m-2 flex flex-col items-center justify-center gap-3 border-2 bg-orange-50 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute top-0 -right-6 z-20 h-5 w-20 rotate-12 bg-orange-200" />
              <div className="absolute top-0 -left-6 z-20 h-5 w-20 -rotate-12 bg-orange-200" />
              {/* User */}
              <div className="flex w-full flex-1 flex-col items-start gap-2">
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

                {/* Title */}
                <h2 className="text-lg font-semibold tracking-tight md:text-3xl">
                  {prod.title}
                </h2>

                {/* Description */}
                <p className="text-muted-foreground line-clamp-2 text-sm">
                  {prod.description}
                </p>
              </div>

              <div className="relative flex aspect-square w-[clamp(180px,70vw,320px)] items-end justify-center bg-white shadow-xl">
                <Image
                  src={prod.imageUrl}
                  alt={prod.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
