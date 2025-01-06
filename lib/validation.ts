import { z } from "zod";

export const SignUpSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .regex(
      /^[A-Z][a-z]+\s[A-Z][a-z]+$/,
      "Full name is required (e.g John Doe)",
    ),
  email: z.string().email("Enter valid email"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[\W_]/, {
      message: "Password must contain at least one special character",
    }),
});
