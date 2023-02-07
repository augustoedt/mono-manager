import { prisma } from 'prisma-orm/src';

import type { PageServerLoadEvent } from './$types';

export async function load({ params }: PageServerLoadEvent) {
  const users = await prisma.user.findMany();

  return {
    users
  };
}
