import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#f9fafb]">
      <div className="w-full max-w-[450px] rounded-lg p-6 bg-white">
        <h1 className="font-medium text-xl">Sign in to your account</h1>
        <form action="" className="">
          <div>
            <label htmlFor="email" className="block text-sm">
              Email Address
            </label>
            <input type="text" name="email" id="email" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
