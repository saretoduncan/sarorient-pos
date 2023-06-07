import { generateToken, prisma } from "@/app/utils/utils";
import { loginSchema } from "@/lib/validation";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import { NextResponse } from "next/server";

import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { setCookie } from "cookies-next";
import { cookies } from "next/headers";
const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        // console.log(credentials);
        const { username, password } = loginSchema.parse(credentials);

        const user = await prisma.users.findUnique({
          where: {
            username: username,
          },
        });
        if (!user) {
          console.log("user not registered with us");
          throw new Error("user not registered with us");
        }
        const passcode = await prisma.passwords.findUnique({
          where: {
            userId: user.id,
          },
        });

        const isPasswordValid = await bcrypt.compare(
          password,
          passcode!.password
        );

        if (!isPasswordValid) {
          console.log("password is valid");
          throw new Error("invalid credentials");
        }
        const token = await generateToken(user.id, user.role);
        const accessToken = token.access_token;

        const authUser = { ...user, accessToken };
        cookies().set({
          name: "refresh_token",
          value: token.refresh_token,
        });
        console.log(authUser);
        return authUser;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if(trigger=== "update"){
        return {...token, ...session.user}
      }
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 2 * 60 * 60,
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
