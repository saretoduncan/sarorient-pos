
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        console.log(credentials);
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        if (username !== "duncan" && password !== "pass") {
          return null;
        }
        return { id: "123", username: "Duncan" };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};
const handler = NextAuth(authOptions);
export {handler as GET , handler as POST}