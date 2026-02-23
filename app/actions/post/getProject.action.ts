'use server';
import prisma from '@/app/lib/prisma';
import { getDbUserPublic } from '../user/user.action';

export default async function getProject() {
  const user = await getDbUserPublic();

  if (!user) return { success: true, data: [] }; // early return for public users

  try {
    const projects = await prisma.project.findMany({
      where: { userId: user.id },
      include: {
        user: {
          select: {
            imageUrl: true,
            email: true,
            name: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' }, // optional: latest first
    });

    return { success: true, data: projects };
  } catch (error) {
    console.error('Error fetching projects:', error);
    return { success: false, data: [] };
  }
}
