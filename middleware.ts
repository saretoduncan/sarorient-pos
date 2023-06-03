import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

const _token = (token: string) => {
  return token.split(" ")[1];
};
export async function middleware(req: NextRequest) {
  if (req.url.includes("/api/auth/refreshtoken")) {
    const refreshToken = req.cookies.get("refresh_token")?.value;
    if (!refreshToken) {
      return NextResponse.json(
        { message: "please login first" },
        { status: 401 }
      );
    }
    try {
     
      await jwtVerify(
        refreshToken,
        new TextEncoder().encode(process.env.JWT_REFRESHER_SECRET as string)
      );
      return NextResponse.next();
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
  if(req.url.includes("/api/")){

  }
}
