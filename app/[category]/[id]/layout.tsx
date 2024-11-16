import React, { ReactNode } from "react";

type Params = Promise<{
  id: string;
}>;
type PropsTypes = {
  children: ReactNode;
  params: Params;
};

function getName() {
  return new Promise<string>((resolve) => {
    const timeout = setTimeout(() => {
      return resolve("productName");
    }, 1000);
    return () => clearTimeout(timeout);
  });
}

export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  // get product name
  const name = await getName();
  return {
    title: `Ecom - ${name}`,
  };
}

const ProdcutInfoLayout = ({ children, params }: PropsTypes) => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      {children}
      <div className="container mt-4 flex justify-between border-t p-4">
        <div>
          <p>
            <span className="text-lg font-semibold">Rs. 3,000</span>
            <span className="text-sm line-through">Rs. 4,000</span>
          </p>
          <p className="text-sm text-highlight">25% off</p>
        </div>
        <button className="rounded-xl border-none bg-highlight p-2 text-sm text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProdcutInfoLayout;
