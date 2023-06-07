import { verifyToken } from "@/app/utils/utils";

type TokenRes = {
  isVerified: boolean;
};
export const verifyJwt = async (req: Request) => {
  const flToken = req.headers.get("Authorization");
  let verified = false;
  console.log("token....." + flToken);
  if (flToken === null || flToken === undefined) return { isVerified: false };
  const splitToken = flToken.split(" ")[1];
  console.log("split...." + splitToken);
  try {
    const { payload } = await verifyToken(
      splitToken,
      process.env.JWT_SECRET as string
    );

    console.log(payload);

    return {
      isVerified: true,
      userRole: payload.userRole,
    };
  } catch (e) {
    return { isVerified: false };
  }
};
