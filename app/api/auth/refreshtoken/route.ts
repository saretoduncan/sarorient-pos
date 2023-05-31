import { verifyToken } from "@/app/utils/utils";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const cookieStore = cookies();
  // console.log(cookieStore)
  const cookie = cookieStore.get("refresh_token")?.value;
  if (!cookie)
    return NextResponse.json(
      { message: "please login first" },
      { status: 401 }
    );

  const verified = verifyToken(
    cookie,
    process.env.JWT_REFRESHER_SECRET as string
  );
}
