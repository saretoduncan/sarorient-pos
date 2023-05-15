import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../utils/utils";
export async function POST(req: NextRequest) {
  return NextResponse.json({ message: "duncan" }, { status: 403 });
}
// export async function GET() {}
// export async function PATCH() {}
// export async function DELETE() {}
