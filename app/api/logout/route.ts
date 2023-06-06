import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ status: 200 });
  res.cookies.set({
    name: "refresh_token",
    value: "",
    httpOnly: true,
    maxAge: 0,
    path: "/",
    expires: new Date(0),
  });
  return res;
}
