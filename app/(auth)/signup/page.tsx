import Label from "@/components/ui/Label";
import { Signature } from "lucide-react";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#f9fafb]">
      <div className="w-full max-w-[450px] min-h-[450px] rounded-lg p-6 flex flex-col justify-center bg-white shadow-xl">
        <div className="grid place-items-center w-20 h-16 blob mb-8 mx-auto">
          <Signature className="size-12 text-slate-300" />
        </div>

        <h1 className="font-medium text-xl mb-6">Create your account</h1>
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
          <button type="submit" className="w-full primary-btn">
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
