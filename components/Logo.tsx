import { Signature } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-end gap-1 text-2xl font-semibold">
      <Signature className="size-8" />
      <span className="bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
        Ecom
      </span>
    </div>
  );
};

export default Logo;
