import { NextResponse } from "next/server";
import { ILogin } from "../../../interfaces/frontendInterface/ILogin";
import { prisma } from "../../../utils/utils";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { headers } from "next/dist/client/components/headers";
export async function POST(req: Request) {
  const { username, password }: ILogin = await req.json();
  if (!username || username === "")
    return NextResponse.json(
      { message: "Please enter your username" },
      { status: 400 }
    );
  if (!password || password === "")
    return NextResponse.json(
      { message: "Please enter your password" },
      { status: 400 }
    );
  const user = await prisma.users.findUnique({
    where: { username: username },
  });

  if (!user)
    return NextResponse.json(
      { message: "user is not registered with us" },
      { status: 400 }
    );

  const passcode = await prisma.passwords.findUnique({
    where: { userId: user.id },
  });
  if (passcode == null || !passcode)
    return NextResponse.json("user doesnt have a passcode");
  const isCorrectPassword = await bycrypt.compare(password, passcode.password);
  if (!isCorrectPassword)
    return NextResponse.json(
      { message: "You've entered a wrong password or username" },
      { status: 401 }
    );
  const token = jwt.sign(
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
  const res = NextResponse.json({ ...user, _token: token }, { status: 201 });
  res.cookies.set({
    name: "refresh_token",
    value: refresherToken,
    httpOnly: true,
    maxAge: 60 * 60 * 2,
    path: "/",
  });
  return res;
}
// export async function GET() {}
// export async function PATCH() {}
// export async function DELETE() {}
