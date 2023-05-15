import { admin } from "./admin";
import { prisma, hashPass } from "../app/utils/utils";
import bcrypt from "bcrypt";

const main = async () => {
  await prisma.users.create({
    data: {
      username: admin.username,
      password: await hashPass(admin.password),
      role: "ADMIN",
    },
  });
};
main().catch(e=>{
  console.log(e)
})