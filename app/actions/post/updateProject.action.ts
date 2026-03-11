'use server';

import cloudinary from '@/app/lib/cloudinary';
import prisma from '@/app/lib/prisma';
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import { revalidatePath } from 'next/cache';

interface UpdateProductParams {
  id: string;
  title: string;
  description: string;
  imageUrl?: File; // optional
  liveUrl: string;
  repoUrl: string;
}

interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
}

export default async function UpdateProduct({
  id,
  title,
  description,
  imageUrl,
  liveUrl,
  repoUrl,
}: UpdateProductParams) {
  try {
    let uploadedImageUrl: string | undefined;

    // 🔹 Upload only if may bagong image
    if (imageUrl && imageUrl.size > 0) {
      const arrayBuffer = await imageUrl.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const uploadResult = await new Promise<CloudinaryUploadResult>(
        (resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              { folder: 'products' },
              (
                error: UploadApiErrorResponse | undefined,
                result: UploadApiResponse | undefined,
              ) => {
                if (error) {
                  reject(error);
                } else if (!result?.secure_url) {
                  reject(new Error('Cloudinary upload failed'));
                } else {
                  resolve(result as CloudinaryUploadResult);
                }
              },
            )
            .end(buffer);
        },
      );

      uploadedImageUrl = uploadResult.secure_url;
    }

    // Update sa database
    const update = await prisma.project.update({
      where: { id },
      data: {
        title,
        description,
        liveUrl,
        repoUrl,
        // only update image if may bagong upload
        ...(uploadedImageUrl && { imageUrl: uploadedImageUrl }),
      },
    });

    // 🔹 Refresh pages
    revalidatePath('/Create');
    revalidatePath('/');

    return {
      success: true,
      data: update,
    };
  } catch (error) {
    console.error('Update error:', error);

    return {
      success: false,
      message: 'Failed to update project',
    };
  }
}
