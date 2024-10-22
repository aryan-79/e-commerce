import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopSelection = () => {
  return (
    <section className="container my-8">
      <h1 className="font-semibold text-lg mb-4">Top Selections</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Link
          href="/"
          className="rounded-[1.15rem] overflow-hidden group border-2 p-4 shadow-md"
        >
          <div className="relative aspect-square mb-4">
            <Image
              src="/wired-earphones.png"
              fill
              alt="wired earphones"
              className="rounded-t-md"
            />
          </div>
          <p className="font-semibold">Wired Earphones</p>
          <p className="text-neutarl-400 text-sm">Upto 50% off</p>
        </Link>
        <Link
          href="/"
          className="rounded-[1.15rem] overflow-hidden group border-2 p-4 shadow-md"
        >
          <div className="relative aspect-square mb-4">
            <Image
              src="/wired-earphones.png"
              fill
              alt="wired earphones"
              className="rounded-t-md"
            />
          </div>
          <p className="font-semibold">Wired Earphones</p>
          <p className="text-neutarl-400 text-sm">Upto 50% off</p>
        </Link>
        <Link
          href="/"
          className="rounded-[1.15rem] overflow-hidden group border-2 p-4 shadow-md"
        >
          <div className="relative aspect-square mb-4">
            <Image
              src="/wired-earphones.png"
              fill
              alt="wired earphones"
              className="rounded-t-md"
            />
          </div>
          <p className="font-semibold">Wired Earphones</p>
          <p className="text-neutarl-400 text-sm">Upto 50% off</p>
        </Link>
        <Link
          href="/"
          className="rounded-[1.15rem] overflow-hidden group border-2 p-4 shadow-md"
        >
          <div className="relative aspect-square mb-4">
            <Image
              src="/wired-earphones.png"
              fill
              alt="wired earphones"
              className="rounded-t-md"
            />
          </div>
          <p className="font-semibold">Wired Earphones</p>
          <p className="text-neutarl-400 text-sm">Upto 50% off</p>
        </Link>
        <Link
          href="/"
          className="rounded-[1.15rem] overflow-hidden group border-2 p-4 shadow-md"
        >
          <div className="relative aspect-square mb-4">
            <Image
              src="/wired-earphones.png"
              fill
              alt="wired earphones"
              className="rounded-t-md"
            />
          </div>
          <p className="font-semibold">Wired Earphones</p>
          <p className="text-neutarl-400 text-sm">Upto 50% off</p>
        </Link>
        <Link
          href="/"
          className="rounded-[1.15rem] overflow-hidden group border-2 p-4 shadow-md"
        >
          <div className="relative aspect-square mb-4">
            <Image
              src="/wired-earphones.png"
              fill
              alt="wired earphones"
              className="rounded-t-md"
            />
          </div>
          <p className="font-semibold">Wired Earphones</p>
          <p className="text-neutarl-400 text-sm">Upto 50% off</p>
        </Link>
      </div>
    </section>
  );
};

export default TopSelection;
