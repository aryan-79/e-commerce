import React from "react";

const ProductListSkeleton = () => {
  return (
    <div className="flex items-center gap-4 relative animate-pulse h-[100px]">
      <div className="relative w-20 h-20 flex-shrink-0 bg-slate-400 rounded-md"></div>
      <div className="flex flex-col justify-center gap-2 w-full py-2">
        <p className="semibold text-lg p-4 bg-slate-400 rounded-md w-2/3"></p>
        <p className="text-highlight text-sm p-2 bg-slate-400 rounded-md w-1/3"></p>

        <p className="text-sm p-2 bg-slate-400 rounded-md w-1/3"></p>
      </div>
      <button className="size-12 rounded-full bg-slate-400 text-highlight grid place-content-center border absolute right-0 bottom-4"></button>
    </div>
  );
};

export default ProductListSkeleton;
