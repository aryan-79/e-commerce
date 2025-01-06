"use client";
import { signup } from "@/actions/auth";
import Logo from "@/components/Logo/Logo";
import Label from "@/components/ui/Label";
import Link from "next/link";
import React, { useActionState } from "react";

const SignUp = () => {
  const initialState = {
    success: false,
  };
  const [state, formAction, isPending] = useActionState(signup, initialState);
  return (
    <div className="flex h-screen items-center justify-center bg-[#f9fafb]">
      <div className="flex min-h-[450px] w-full max-w-[450px] flex-col justify-center rounded-lg bg-white p-6 shadow-xl">
        <div className="blob mx-auto mb-8 grid h-16 w-20 place-items-center">
          <Logo size={28} />
        </div>

        <h1 className="mb-6 text-xl font-medium">Create your account</h1>
        <form action={formAction} className="space-y-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <input type="text" name="firstName" id="firstName" />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <input type="text" name="lastName" id="lastName" />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <input type="text" name="email" id="email" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
          </div>
          <button
            type="submit"
            className="primary-btn w-full rounded-md disabled:cursor-not-allowed"
            disabled={isPending}
          >
            Sign Up
          </button>
        </form>
        <p className="my-6 text-center">
          Already have an account?{" "}
          <Link
            href="/login"
            className="hover:text-highlight-800 text-highlight"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
