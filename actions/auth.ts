"use server";
import { prisma } from "@/lib/db";

export async function signup(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { success: true };
}
