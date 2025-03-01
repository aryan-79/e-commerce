import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopCategories = () => {
  return (
    <div className="my-8 grid grid-cols-4 place-items-center gap-4">
      <div>
        <Link href="/mobiles">
          <div className="relative flex size-16 items-center justify-center overflow-hidden rounded-full border border-highlight">
            <Image src="/mobile.png" fill sizes="60px" alt="mobiles" />
          </div>
          <p className="text-center text-sm">Mobiles</p>
        </Link>
      </div>
      <div>
        <Link href="/electronics">
          <div className="relative flex size-16 items-center justify-center overflow-hidden rounded-full border border-highlight">
            <Image src="/electronics.png" fill sizes="60px" alt="electronics" />
          </div>
          <p className="text-center text-sm">Electronics</p>
        </Link>
      </div>
      <div>
        <Link href="/fashion">
          <div className="relative flex size-16 items-center justify-center overflow-hidden rounded-full border border-highlight">
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
        <Link href="/grocery">
          <div className="relative size-16 overflow-hidden rounded-full border border-highlight">
            <Image src="/grocery.png" fill sizes="60px" alt="grocery" />
          </div>
          <p className="text-center text-sm">Grocery</p>
        </Link>
      </div>
    </div>
  );
};

export default TopCategories;
