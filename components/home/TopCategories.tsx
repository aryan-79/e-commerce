import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopCategories = () => {
  return (
    <div className="grid grid-cols-4 place-items-center gap-4 my-8">
      <div>
        <Link href="/">
          <div className="size-16 rounded-full flex justify-center items-center border border-highlight relative overflow-hidden">
            <Image src="/mobile.png" fill sizes="60px" alt="mobiles" />
          </div>
          <p className="text-center text-sm">Mobiles</p>
        </Link>
      </div>
      <div>
        <Link href="/">
          <div className="size-16 rounded-full flex justify-center items-center border border-highlight relative overflow-hidden">
            <Image src="/electronics.png" fill sizes="60px" alt="electronics" />
          </div>
          <p className="text-center text-sm">Electronics</p>
        </Link>
      </div>
      <div>
        <Link href="/">
          <div className="size-16 rounded-full flex justify-center items-center border border-highlight relative overflow-hidden">
            <Image
              src="/fashion.png"
              fill
              sizes="60px"
              alt="fashion"
              className="object-cover"
            />
          </div>
          <p className="text-center text-sm">Fashion</p>
        </Link>
      </div>
      <div>
        <Link href="/">
          <div className="size-16 rounded-full border border-highlight relative overflow-hidden">
            <Image src="/furniture.png" fill sizes="60px" alt="furniture" />
          </div>
          <p className="text-center text-sm">Furniture</p>
        </Link>
      </div>
      <div>
        <Link href="/">
          <div className="size-16 rounded-full border border-highlight relative overflow-hidden">
            <Image src="/grocery.png" fill sizes="60px" alt="grocery" />
          </div>
          <p className="text-center text-sm">Grocery</p>
        </Link>
      </div>
      <div>
        <Link href="/">
          <div className="size-16 rounded-full flex justify-center items-center border border-highlight relative overflow-hidden">
            <Image src="/appliances.png" fill sizes="60px" alt="appliances" />
          </div>
          <p className="text-center text-sm">Appliances</p>
        </Link>
      </div>
      <div>
        <Link href="/">
          <div className="size-16 rounded-full flex justify-center items-center border border-highlight relative overflow-hidden">
            <Image src="/toys.png" fill sizes="60px" alt="appliances" />
          </div>
          <p className="text-center text-sm">Toys</p>
        </Link>
      </div>
      <div>
        <Link href="/categories">
          <div className="size-16 rounded-full flex justify-center items-center border border-highlight relative overflow-hidden">
            <MoreHorizontal />
          </div>
          <p className="text-center text-sm">More</p>
        </Link>
      </div>
    </div>
  );
};

export default TopCategories;
