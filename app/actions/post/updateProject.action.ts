'use server';

import prisma from '@/app/lib/prisma';
import { revalidatePath } from 'next/cache';

interface AddProductParams {
  title: string;
  description: string;
  imageUrl: string;
  id: string;
}

export default async function UpdateProduct({
  title,
  imageUrl,
  description,
  id,
}: AddProductParams) {
  try {
    const update = await prisma.project.update({
      where: { id },
      data: { title, imageUrl, description },
    });
    revalidatePath('/Create');
    return { success: true, data: update };
  } catch (error) {
    console.error('Update error:', error);
  }
}
