import { z } from "zod";

export const signupSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email(),
    number: z
      .string()
      .regex(
        /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/,
        "Enter valid phone number",
      ),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const loginSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters"),
  });

export type SignUp = z.infer<typeof signupSchema>;
export type Login = z.infer<typeof loginSchema>;
