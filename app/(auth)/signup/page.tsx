import Logo from "@/components/Logo/Logo";
import Label from "@/components/ui/Label";
import { Signature } from "lucide-react";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#f9fafb]">
      <div className="flex min-h-[450px] w-full max-w-[450px] flex-col justify-center rounded-lg bg-white p-6 shadow-xl">
        <div className="blob mx-auto mb-8 grid h-16 w-20 place-items-center">
          <Logo size={28} />
        </div>

        <h1 className="mb-6 text-xl font-medium">Create your account</h1>
        <form action="" className="space-y-4">
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
          <button type="submit" className="primary-btn w-full rounded-md">
            Sign Up
          </button>
        </form>
        <p className="my-6 text-center">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-highlight hover:text-highlightDark"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
