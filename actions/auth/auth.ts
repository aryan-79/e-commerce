"use server";
import { createSession, generateSessionToken } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Login, loginSchema, SignUp, signupSchema } from "@/lib/schema/auth.schema";
import { User } from "@prisma/client";
import bcrypt from 'bcryptjs';
import { setSessionCookie } from "./cookies";

export type ActionResponse<T, F> = {
  success: boolean;
  message: string;
  data?: T;
  fields?: F;
  errors?: Record<string, string[]>,
  redirectTo?: string;
}

export type SignupActionResponse = ActionResponse<Omit<User, 'password'>, SignUp>;
export type LoginActionResponse = ActionResponse<Omit<User, 'password'>, Login>;

export async function signUp(_: SignupActionResponse | null, data: SignUp): Promise<SignupActionResponse> {
  try {
    const result = signupSchema.safeParse(data);
    if (!result.success) {
      return {
        success: false,
        message: "Validation Error",
        fields: data,
        errors: result.error.flatten().fieldErrors,
      }
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        email: result.data.email,
      }
    });
    if (existingUser) {
      return {
        success: false,
        message: "User with the email already exists",
      }
    }
    const { name, email, number, password } = result.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        number,
        password: hashedPassword,
      },
      omit: {
        password: true,
      }
    });

    const token = generateSessionToken();
    const session = await createSession(token, newUser.id);
    await setSessionCookie(token, session.expiresAt);

    return {
      success: true,
      message: "New user created successfully",
      data: newUser,
      redirectTo: '/',
    }
  } catch (error) {
    console.log("Error during signup:", error);
    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
}


export async function login(_: LoginActionResponse | null, input: Login): Promise<LoginActionResponse> {
  const { success, data, error } = loginSchema.safeParse(input);
  if (!success) {
    return {
      success: false,
      message: "Validation error",
      errors: error.flatten().fieldErrors,
      fields: input,
    }
  };
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    }
  });

  if (!user || !(await bcrypt.compare(data.password, user.password))) {
    return {
      success: false,
      message: "Wrong email or password",
    }
  }

  const token = generateSessionToken();
  const session = await createSession(token, user.id);
  await setSessionCookie(token, session.expiresAt);
  return {
    success: true,
    message: "Logged in successfully",
    data: user,
    redirectTo: '/',
  }
}

