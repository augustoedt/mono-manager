import { PrismaClient } from '@prisma/client';
export * from '@prisma/client';

declare global {
    var prisma: PrismaClient | undefined;
}
declare const prisma: PrismaClient;

export { prisma };
