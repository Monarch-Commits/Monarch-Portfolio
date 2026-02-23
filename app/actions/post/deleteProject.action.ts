'use server';

import prisma from '@/app/lib/prisma';

export default async function deleteProject(id: string) {
  try {
    const d = await prisma.project.delete({
      where: { id },
    });
    return { success: true, data: d };
  } catch (error) {
    console.error('Delete error:', error);
  }
}
