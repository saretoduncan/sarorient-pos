import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().regex(/^[a-z0-9_-]{3,15}$/g, "invalid username"),
  password: z.string().nonempty("password is required"),
});
