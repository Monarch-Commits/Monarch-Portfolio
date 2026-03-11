'use server';

import cloudinary from '@/app/lib/cloudinary';
import prisma from '@/app/lib/prisma';
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import { revalidatePath } from 'next/cache';

interface AddProductParams {
  title: string;
  description: string;
  imageUrl: File;
  liveUrl: string;
  repoUrl: string;
  id: string;
}

interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
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

    const update = await prisma.project.update({
      where: { id },
      data: {
        title,
        imageUrl: uploadResult.secure_url,
        description,
        liveUrl,
        repoUrl,
      },
    });
    revalidatePath('/Create');
    revalidatePath('/');
    return { success: true, data: update };
  } catch (error) {
    console.error('Update error:', error);
  }
}
