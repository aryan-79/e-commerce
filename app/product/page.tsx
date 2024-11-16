import Logo from "@/components/Logo/Logo";
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
      <div className="mb-4 flex items-center justify-between">
        <Link href="/">
          <Logo size={28} />
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
    <div className="relative flex items-center">
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
        <p className="text-sm text-highlight">400mm, Blue tone</p>

        <p className="text-sm">
          <span className="text-green-600">20% off</span>{" "}
          <span className="text-neutral-400 line-through">Rs 4,000</span> Rs.
          3,200
        </p>
      </Link>
      <button className="absolute bottom-4 right-0 grid size-12 place-content-center rounded-full border bg-[#1b84ff]/20 text-highlight hover:bg-[#1b84ff]/40">
        <ShoppingCart />
      </button>
    </div>
  );
};

export default ProductPage;
