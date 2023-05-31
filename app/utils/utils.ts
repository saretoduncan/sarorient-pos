import { PrismaClient } from "@prisma/client";
import bycrpt from "bcrypt";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { SignJWT, jwtVerify, type JWTPayload } from "jose";

export const prisma = new PrismaClient();
//hashing passwords
export const hashPass = async (password: string) => {
  const salt = await bycrpt.genSalt(10);
  return await bycrpt.hash(password, salt);
};

export const generateToken = async (userId: string, userRole: string) => {
  const iat = Math.floor(Date.now() / 1000);
  const access_exp = iat + 60 * 2;
  const refresher_exp = iat + 60 * 60 * 2;
  const _token = await new SignJWT({ userId, userRole })
    .setProtectedHeader({
      alg: "HS256",
      typ: "JWT",
    })
    .setExpirationTime(access_exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));

  const refresherToken = await new SignJWT({ userId, userRole })
    .setProtectedHeader({
      alg: "HS256",
      typ: "JWT",
    })
    .setExpirationTime(refresher_exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(process.env.JWT_REFRESHER_SECRET));

  const tokens: Token = {
    refresh_token: refresherToken,
    access_token: _token,
  };
  return tokens;
};
export const verifyToken = (token: string, secret: string) => {
  try {
    const ver = jwt.verify(token, secret);
    return ver;
  } catch (e) {
    const error = console.log(JsonWebTokenError);
  }
};
