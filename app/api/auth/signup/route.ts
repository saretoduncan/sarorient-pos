import { ISignup } from "@/app/interfaces/ISignup";
import { IUserResponse } from "@/app/interfaces/IUserResponse";
import { hashPass, prisma } from "@/app/utils/utils";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
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
  const createPassword = async (hashedPass: string, userId: string) => {
    return await prisma.passwords.create({
      data: {
        password: hashedPass,
        userId: userId,
      },
    });
  };
  try {
    if (role?.toUpperCase() === "ADMIN") {
      const registerUser = await prisma.users.create({
        data: {
          username: username,
          role: "ADMIN",
          phoneNumber: phoneNumber,
          email: email,
        },
      });
      createPassword(hashPassword, registerUser.id);
      return NextResponse.json(registerUser, { status: 201 });
    } else {
      const registerUser = await prisma.users.create({
        data: {
          username: username,
          phoneNumber: phoneNumber,
          email: email,
        },
      });
      createPassword(hashPassword, registerUser.id);
      const token = jwt.sign({_id:registerUser.id, _role:registerUser.role}, process.env.JWT_SECRET!)
      return NextResponse.json({ data: registerUser, _token:token }, { status: 200 });
    }
  } catch (e) {
    return NextResponse.json(e);
  }
}
