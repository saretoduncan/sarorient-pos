"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
type child = {
  children: ReactNode;
};

const Provider = ({ children }: child) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default Provider;
