"use client";
type child = {
  children: React.ReactNode;
};
import { SessionProvider } from "next-auth/react";
const Provider = ({ children }: child) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default Provider;
