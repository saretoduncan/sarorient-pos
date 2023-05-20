import { ISignup } from "@/app/interfaces/ISignup";
import { IUserResponse } from "@/app/interfaces/IUserResponse";
import { hashPass, prisma } from "@/app/utils/utils";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const {
    username,
    password,
    confirmPassword,
    email,
    phoneNumber,
    role,
  }: ISignup = await req.json();
  if (!username || username === "")
    return NextResponse.json(
      { message: "please enter your username" },
      { status: 400 }
    );
  if (!password || password === "")
    return NextResponse.json(
      { message: "please enter your password" },
      { status: 400 }
    );
  if (!confirmPassword || confirmPassword !== password)
    return NextResponse.json(
      { message: "password doesn't match" },
      { status: 400 }
    );

  const user = await prisma.users.findUnique({
    where: { username: username },
  });
  if (user !== null)
    return NextResponse.json(
      { message: "Username is already registered" },
      { status: 409 }
    );
  const hashPassword = await hashPass(password);
  try {
    if (role?.toUpperCase() === "ADMIN") {
      const registerUser = await prisma.users.create({
        data: {
          password: hashPassword,
          username: username,
          role: "ADMIN",
          phoneNumber: phoneNumber,
          email: email,
        },
      });
      return NextResponse.json(registerUser, { status: 201 });
    } else {
      const registerUser = await prisma.users.create({
        data: {
          password: hashPassword,
          username: username,
          phoneNumber: phoneNumber,
          email: email,
        }
      });
      return NextResponse.json({ data: registerUser }, { status: 200 });
    }
  } catch (e) {
    return NextResponse.json(e);
  }
}
