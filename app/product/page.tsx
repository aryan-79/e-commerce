import Filter from "@/components/product/Filter";
import ProductListSkeleton from "@/components/skeleton/ProductListSkeleton";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

export const dynamic = "force-dynamic";

type PropsType = {
  searchParams: {
    category: string;
  };
};

const ProductPage = async ({ searchParams }: PropsType) => {
  const { category } = searchParams;
  return (
    <div className="container py-2">
      <div className="flex justify-between items-center mb-4">
        <Link href="/" className="font-semibold text-xl uppercase">
          Logo
        </Link>
        <Filter />
      </div>
      <div className="flex flex-col gap-4">
        <Suspense
          fallback={
            <>
              <ProductListSkeleton />
              <ProductListSkeleton />
              <ProductListSkeleton />
            </>
          }
        >
          <Products />
        </Suspense>
      </div>
    </div>
  );
};

const Products = async () => {
  const getProducts = async () => {
    return new Promise<string>((resolve) => {
      setTimeout(() => resolve("Havells Swing Fan"), 2000);
    });
  };
  const products = await getProducts();
  console.log(products);
  return (
    <div className="flex items-center relative">
      <Link href="/product/uoiuoqoper" className="relative w-20">
        <Image
          src="/fans.png"
          width={100}
          height={100}
          alt=""
          className="object-contain"
        />
      </Link>
      <Link
        href="/product/uoiuoqoper"
        className="flex flex-col justify-center py-4"
      >
        <p className="semibold text-lg">{products}</p>
        <p className="text-highlight text-sm">400mm, Blue tone</p>

        <p className="text-sm">
          <span className="text-green-600">20% off</span>{" "}
          <span className="text-neutral-400 line-through">Rs 4,000</span> Rs.
          3,200
        </p>
      </Link>
      <button className="size-12 rounded-full bg-[#1b84ff]/20 text-highlight grid place-content-center border hover:bg-[#1b84ff]/40 absolute right-0 bottom-4">
        <ShoppingCart />
      </button>
    </div>
  );
};

export default ProductPage;
