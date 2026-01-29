import getProject from '@/app/actions/post/getProject.action';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default async function Project() {
  const project = await getProject();
  console.log(project);

  return (
    <div className="mt-10 grid min-w-full grid-cols-1 gap-4 sm:grid-cols-2 md:mt-0 lg:grid-cols-3">
      {project?.data.length === 0 ? (
        <div>No Project Found</div>
      ) : (
        project?.data.map((prod) => (
          <div
            key={prod.id}
            className="group border-border bg-background m-2 flex flex-col gap-3 rounded-xl border p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-50 w-full">
              <Image
                src={prod.imageUrl}
                alt={prod.title}
                fill
                className="rounded-md object-cover"
                priority
              />
            </div>

            {/* User */}
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
            <h2 className="line-clamp-1 text-lg font-semibold tracking-tight">
              {prod.title}
            </h2>

            {/* Description */}
            <p className="text-muted-foreground line-clamp-2 text-sm">
              {prod.description}
            </p>

            {/* Button */}
            <div className="mt-auto">
              <Link href={`/posts/${prod.id}`} className="w-full">
                <Button
                  variant="secondary"
                  className="group-hover:bg-primary group-hover:text-primary-foreground w-full transition-all duration-300"
                >
                  Edit Project
                </Button>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
