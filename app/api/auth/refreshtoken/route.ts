import { generateToken, verifyToken } from "@/app/utils/utils";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function POST() {
  const cookieStore = cookies();
  // console.log(cookieStore)
  const cookie = cookieStore.get("refresh_token")?.value;
  if (!cookie)
    return NextResponse.json(
      { message: "please login first" },
      { status: 401 }
    );
  try {
    const { payload } = await verifyToken(
      cookie,
      process.env.JWT_REFRESHER_SECRET as string
    );
    const { userId, userRole } = payload;

    const _token = await generateToken(userId as string, userRole as string);
    const res = NextResponse.json(
      {
        access_token: _token.access_token,
      },
      { status: 200 }
    );
    res.cookies.set({
      name: "refresh_token",
      value: _token.refresh_token,
      httpOnly: true,
      maxAge: 60 * 60 * 2,
      path: "/",
    });
    return res;
  } catch (e) {
    console.log(e);
    const res = NextResponse.json(
      {
        message: "Invalid credentials. Please try login",
      },
      { status: 401 }
    );
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
}
