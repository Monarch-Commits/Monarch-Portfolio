import getProject from '@/app/actions/post/getProject.action';
import { stack } from '@/app/constant/Constant';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { HiArrowTrendingDown } from 'react-icons/hi2';

export default async function Project() {
  const project = await getProject();

  return (
    <section
      id="Projects"
      className="relative w-full max-w-7xl overflow-hidden px-1 md:px-6"
    >
      {/* HEADER */}
      <header className="mb-10">
        <h1
          className="mb-6 text-3xl font-semibold md:text-5xl"
          style={{ fontFamily: "'Momo Signature', cursive" }}
        >
          My Creative Works
        </h1>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-3">
          {stack.map((tech) => (
            <Button
              key={tech.name}
              variant="outline"
              size="sm"
              className="border-orange-300 bg-orange-100 text-orange-900 shadow-sm hover:bg-orange-200 dark:text-orange-300"
            >
              {tech.name}
            </Button>
          ))}
        </div>
      </header>

      {/* MASONRY CONTAINER */}
      <div className="columns-1 gap-4 [column-fill:balance] sm:columns-2 lg:columns-3">
        {project?.data?.length === 0 && (
          <p className="text-muted-foreground">No Project Found</p>
        )}

        {project?.data?.map((prod, index) => (
          <article
            key={prod.id}
            className={`relative mx-0 mb-4 flex break-inside-avoid flex-col gap-4 rounded-md border-2 bg-orange-50 p-4 shadow-sm transition-all hover:shadow-xl md:mx-5 ${
              index % 3 === 0
                ? 'md:rotate-2'
                : index % 3 === 1
                  ? 'md:-rotate-3'
                  : 'md:rotate-3'
            } `}
          >
            {/* TAPE EFFECT */}
            <span
              className={`absolute h-5 w-20 rotate-12 bg-orange-200 ${
                index % 3 === 0
                  ? 'top-0 -right-6'
                  : index % 3 === 1
                    ? '-right-6 bottom-0'
                    : 'top-0 -right-6 rotate-60'
              } `}
            />
            <span className="absolute top-0 -left-6 h-5 w-20 -rotate-12 bg-orange-200" />

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
          </article>
        ))}
        <div
          style={{ fontFamily: "'Momo Signature', cursive" }}
          className="absolute right-2 bottom-1 hidden flex-col items-center justify-center font-semibold text-orange-500 md:flex"
        >
          <span>More</span>
          <span>Comming</span>
          <span>Soon!!</span>
          <HiArrowTrendingDown className="h-7 w-7" />
        </div>
      </div>
    </section>
  );
}
