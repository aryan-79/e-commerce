import React, { ReactNode } from "react";

type PropsTypes = {
  children: ReactNode;
  params: {
    id: string;
  };
};

const ProdcutInfoLayout = ({ children, params }: PropsTypes) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {children}
      <div className="container  flex justify-between p-4 border-t mt-4">
        <div>
          <p>
            <span className="text-lg font-semibold">Rs. 3,000</span>
            <span className="text-sm line-through">Rs. 4,000</span>
          </p>
          <p className="text-highlight text-sm">25% off</p>
        </div>
        <button className="border-none rounded-xl bg-highlight text-white p-2 text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProdcutInfoLayout;
