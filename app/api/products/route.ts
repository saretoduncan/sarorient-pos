import { separete_token, prisma, verifyToken } from "@/app/utils/utils";
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
export async function GET() {
  const product = await prisma.product.findMany({
    include: {
      addedBy: true,
    },
  });
  return NextResponse.json({ product }, { status: 200 });
}
