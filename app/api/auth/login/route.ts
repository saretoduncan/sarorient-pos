import { NextResponse } from "next/server";
import { ILogin } from "../../../interfaces/frontendInterface/ILogin";
import { prisma } from "../../../utils/utils";
import bycrypt from "bcrypt";
import { IUserResponse } from "@/app/interfaces/IUserResponse";
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
  const isCorrectPassword = await bycrypt.compare(passcode.id, password);
  if (isCorrectPassword)
    return NextResponse.json(
      { message: "You've entered a wrong password or username" },
      { status: 401 }
    );

  return NextResponse.json(user, { status: 201 });
}
// export async function GET() {}
// export async function PATCH() {}
// export async function DELETE() {}
