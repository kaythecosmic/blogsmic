import { z } from "zod";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const SchemaLoginForm = z.object({
  username: z.string().min(4, "Username must be atleast 4 characters long."),
  password: z.string().min(8, "Password must contain at least 8 characters."),
});

export const SchemaRegisterForm = z.object({
  username: z.string().email("Please enter a valid email address."),
  password: z.string().min(8, "Password must contain at least 8 characters."),
});
