'use server';

import prisma from '@/app/lib/prisma';
import { revalidatePath } from 'next/cache';

interface AddProductParams {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  repoUrl: string;
  id: string;
}

export default async function UpdateProduct({
  title,
  imageUrl,
  description,
  liveUrl,
  repoUrl,
  id,
}: AddProductParams) {
  try {
    const update = await prisma.project.update({
      where: { id },
      data: { title, imageUrl, description, liveUrl, repoUrl },
    });
    revalidatePath('/Create');
    return { success: true, data: update };
  } catch (error) {
    console.error('Update error:', error);
  }
}
