import { separete_token, prisma, verifyToken } from "@/app/utils/utils";
import { verifyJwt } from "@/lib/jwtVerify";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { product, brand, code, price, buyingPrice, quantity }: Products =
    await req.json();
  const token = separete_token(req.headers.get("Authorization") as string);
  const { payload } = await verifyToken(
    token,
    process.env.JWT_SECRET as string
  );
  const { userId } = payload;
  const personId = userId as string;

  try {
    const newProduct = await prisma.product.create({
      data: {
        brand,
        buyingPrice,
        code,
        productName: product,
        Qty: quantity,
        sellingPrice: price,
        userId: personId,
      },
      include: {
        addedBy: true,
      },
    });
    return NextResponse.json({ newProduct }, { status: 200 });
  } catch (e) {
    console.log(e);
  }
}
export async function GET(req: Request) {
  // const
  // await verifyJwt()
  const verified = await verifyJwt(req);
  if (!verified.isVerified)
    return NextResponse.json(
      { message: "you are not authorize " },
      { status: 401 }
    );
  const products = await prisma.product.findMany({
    include: {
      addedBy: true,
    },
  });
  return NextResponse.json({ ...products }, { status: 200 });
}
