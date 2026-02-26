'use server';
import prisma from '@/app/lib/prisma';
import { getDbUser } from '../user/user.action';
import { redirect } from 'next/navigation';

export default async function getProject() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        user: {
          select: {
            imageUrl: true,
            name: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return { success: true, data: projects };
  } catch (error) {
    console.error('Error fetching projects:', error);
    return { success: false, data: [] };
  }
}

export async function getPrivateProject() {
  try {
    const user = await getDbUser();

    if (!user || user === 'UNAUTHORIZED') {
      redirect('/');
    }

    const projects = await prisma.project.findMany({
      where: { userId: user.id },
      include: {
        user: {
          select: { imageUrl: true, name: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return { success: true, data: projects };
  } catch (error) {
    console.error('Error fetching private projects:', error);
    return { success: false, data: [] };
  }
}
