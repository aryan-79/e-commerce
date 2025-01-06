import { PrismaClient } from "@prisma/client";
export enum UserEnum {
  BUYER,
  SELLER,
  ADMIN,
}

const prisma = new PrismaClient();
async function test() {
  const user = await prisma.user.findFirst({
    where: {
      role: 1,
    },
  });
}
