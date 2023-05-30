import { PrismaClient } from "@prisma/client";
import bycrpt from "bcrypt";
import jwt from "jsonwebtoken";
export const prisma = new PrismaClient();
//hashing passwords
export const hashPass = async (password: string) => {
  const salt = await bycrpt.genSalt(10);
  return await bycrpt.hash(password, salt);
};

export const generateToken = (user: User) => {
  const _token = jwt.sign(
    { _id: user.id, role: user.role },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "120s",
    }
  );
  const refresherToken = jwt.sign(
    { _id: user.id, role: user.role },
    process.env.JWT_REFRESHER_SECRET as string,
    { expiresIn: "7200s" }
  );
  const tokens: Token = {
    refresh_token: refresherToken,
    access_token: _token,
  };
  return tokens;
};
