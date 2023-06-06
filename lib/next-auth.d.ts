import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      accessToken: string;
      createdAt: Date;
      email: string;
      id: string;
      isActive: boolean;
      phoneNumber: string;
      role: string;
      updateAt: Date;
      username: string;
    } & Session["user"];
  }
}
