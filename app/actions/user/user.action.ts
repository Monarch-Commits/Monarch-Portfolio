'use server';

import prisma from '@/app/lib/prisma';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function getUserByKindeId(kindeId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { kindeId },
      include: {
        _count: {
          select: { projects: true },
        },
      },
    });
    return user;
  } catch (error) {
    console.error('Error fetching user by Kinde ID:', error);
    return null;
  }
}

export async function getDbUser() {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();

  if (!kindeUser?.id) {
    throw new Error('Unauthorized: No Kinde user found');
  }

  // 🔐 SINGLE USER CHECK
  if (kindeUser.email !== process.env.OWNER_EMAIL) {
    throw new Error('Unauthorized: Not allowed user');
  }

  let dbUser = await getUserByKindeId(kindeUser.id);

  if (!dbUser) {
    await prisma.user.create({
      data: {
        kindeId: kindeUser.id,
        name: `${kindeUser.given_name ?? 'User'} ${kindeUser.family_name ?? ''}`.trim(),

        imageUrl: kindeUser.picture ?? undefined,
      },
    });

    dbUser = await getUserByKindeId(kindeUser.id);

    if (!dbUser) {
      throw new Error('Failed to create or fetch user after creation');
    }
  }

  return dbUser;
}

export async function getDbUserPublic() {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();
  if (!kindeUser?.id || kindeUser.email !== process.env.OWNER_EMAIL) {
    return null;
  }

  return getUserByKindeId(kindeUser.id);
}
