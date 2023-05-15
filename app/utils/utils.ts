import { PrismaClient } from "@prisma/client";
import bycrpt from "bcrypt";
export const prisma = new PrismaClient();
//hashing passwords
export const hashPass = async (password: string) => {
  const salt = await bycrpt.genSalt(10);
  return await bycrpt.hash(password, salt);
};
