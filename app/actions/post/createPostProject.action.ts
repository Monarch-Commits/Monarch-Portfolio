'use server';

import { revalidatePath } from 'next/cache';
import { getDbUser } from '../user/user.action';
import prisma from '@/app/lib/prisma';
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import cloudinary from '@/app/lib/cloudinary';
import { redirect } from 'next/navigation';

interface AddProductParams {
  title: string;
  description: string;
  imageUrl: File;
  liveUrl: string;
  repoUrl: string;
}

interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
}

export default async function createPost({
  description,
  title,
  imageUrl,
  liveUrl,
  repoUrl,
}: AddProductParams) {
  try {
    const userId = await getDbUser();

    if (!userId) {
      redirect('/api/auth/login');
    }

    if (!imageUrl || imageUrl.size === 0) {
      throw new Error('Image is required');
    }

    // Convert File → Buffer
    const arrayBuffer = await imageUrl.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload sa Cloudinary
    const uploadResult = await new Promise<CloudinaryUploadResult>(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            { folder: 'products' },
            (
              error: UploadApiErrorResponse | undefined,
              result: UploadApiResponse | undefined,
            ) => {
              if (error) reject(error);
              else if (!result?.secure_url)
                reject(new Error('Cloudinary upload failed'));
              else resolve(result as CloudinaryUploadResult);
            },
          )
          .end(buffer);
      },
    );

    const newProduct = await prisma.project.create({
      data: {
        userId: userId.id,
        title,
        description,
        imageUrl: uploadResult.secure_url,
        liveUrl,
        repoUrl,
      },
    });
    revalidatePath('/Create');
    return { success: true, data: newProduct };
  } catch (error) {
    console.log('Error adding product:', error);
    return {
      success: false,
      message: 'Something went wrong',
    };
  }
}
