import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularItems = () => {
  return (
    <section className="container">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-semibold text-xl text-emphasisText">
          Popular Items
        </h1>
        <Link href="/popular" className="text-sm">
          View all &gt;
        </Link>
      </div>

      <div className="grid gap-2 divide-y-2">
        <div className="flex items-center relative">
          <Link href="/item" className="relative w-20">
            <Image
              src="/fans.png"
              width={100}
              height={100}
              alt=""
              className="object-contain"
            />
          </Link>
          <Link href="/item" className="flex flex-col justify-center py-4">
            <p className="semibold text-lg">Havells Swing Fan</p>
            <p className="text-highlight text-sm">400mm, Blue tone</p>

            <p className="text-sm">
              <span className="text-green-600">20% off</span>{" "}
              <span className="text-neutral-400 line-through">Rs 4,000</span>{" "}
              Rs. 3,200
            </p>
          </Link>
          <button className="size-12 rounded-full bg-[#1b84ff]/20 text-highlight grid place-content-center border hover:bg-[#1b84ff]/40 absolute right-0 bottom-4">
            <ShoppingCart />
          </button>
        </div>
        <div className="flex items-center relative">
          <Link href="/item" className="relative w-20">
            <Image
              src="/fans.png"
              width={100}
              height={100}
              alt=""
              className="object-contain"
            />
          </Link>
          <Link href="/item" className="flex flex-col justify-center py-4">
            <p className="semibold text-lg">Havells Swing Fan</p>
            <p className="text-highlight text-sm">400mm, Blue tone</p>

            <p className="text-sm">
              <span className="text-green-600">20% off</span>{" "}
              <span className="text-neutral-400 line-through">Rs 4,000</span>{" "}
              Rs. 3,200
            </p>
          </Link>
          <button className="size-12 rounded-full bg-[#1b84ff]/20 text-highlight grid place-content-center border hover:bg-[#1b84ff]/40 absolute right-0 bottom-4">
            <ShoppingCart />
          </button>
        </div>
        <div className="flex items-center relative">
          <Link href="/item" className="relative w-20">
            <Image
              src="/fans.png"
              width={100}
              height={100}
              alt=""
              className="object-contain"
            />
          </Link>
          <Link href="/item" className="flex flex-col justify-center py-4">
            <p className="semibold text-lg">Havells Swing Fan</p>
            <p className="text-highlight text-sm">400mm, Blue tone</p>

            <p className="text-sm">
              <span className="text-green-600">20% off</span>{" "}
              <span className="text-neutral-400 line-through">Rs 4,000</span>{" "}
              Rs. 3,200
            </p>
          </Link>
          <button className="size-12 rounded-full bg-[#1b84ff]/20 text-highlight grid place-content-center border hover:bg-[#1b84ff]/40 absolute right-0 bottom-4">
            <ShoppingCart />
          </button>
        </div>
        <div className="flex items-center relative">
          <Link href="/item" className="relative w-20">
            <Image
              src="/fans.png"
              width={100}
              height={100}
              alt=""
              className="object-contain"
            />
          </Link>
          <Link href="/item" className="flex flex-col justify-center py-4">
            <p className="semibold text-lg">Havells Swing Fan</p>
            <p className="text-highlight text-sm">400mm, Blue tone</p>

            <p className="text-sm">
              <span className="text-green-600">20% off</span>{" "}
              <span className="text-neutral-400 line-through">Rs 4,000</span>{" "}
              Rs. 3,200
            </p>
          </Link>
          <button className="size-12 rounded-full bg-[#1b84ff]/20 text-highlight grid place-content-center border hover:bg-[#1b84ff]/40 absolute right-0 bottom-4">
            <ShoppingCart />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
