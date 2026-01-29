'use server';
import prisma from '@/app/lib/prisma';
import { getDbUserPublic } from '../user/user.action';

export default async function getProject() {
  const user = await getDbUserPublic();

  try {
    const project = await prisma.project.findMany({
      where: { userId: user?.id },
      include: {
        user: {
          select: {
            products: true,
            imageUrl: true,
            email: true,
            name: true,
          },
        },
      },
    });
    return { success: true, data: project };
  } catch (error) {
    console.error(error);
  }
}
