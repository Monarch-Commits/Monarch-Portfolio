'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { Avatar } from '@/components/ui/avatar';

export default function ProjectSkeleton() {
  const fakeArray = Array.from({ length: 3 });

  return (
    <div className="columns-1 space-y-2 [column-fill:balance] sm:columns-2 md:space-y-4 lg:columns-3">
      {fakeArray.map((_, index) => (
        <article
          key={index}
          className={`relative z-0 flex break-inside-avoid flex-col gap-4 border-2 bg-orange-50 p-4 shadow-sm md:mx-2 dark:bg-orange-50 ${
            index % 3 === 0
              ? 'md:rotate-2'
              : index % 3 === 1
                ? 'md:-rotate-3'
                : 'md:rotate-3'
          } `}
        >
          {/* TAPE */}
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

          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <Skeleton className="h-8 w-8 rounded-full" />
            </Avatar>
            <Skeleton className="h-4 w-20 rounded-md" />
          </div>

          <Skeleton className="h-6 w-3/4 rounded-md" />

          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-5/6 rounded-md" />

          <div className="flex gap-4">
            <Skeleton className="h-8 w-20 rounded-md" />
            <Skeleton className="h-8 w-24 rounded-md" />
          </div>

          {/* IMAGE */}
          <Skeleton className="h-48 w-full rounded-md" />

          {/* STACK ICONS */}
          <div className="mt-2 flex flex-wrap gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-8 rounded-full" />
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
