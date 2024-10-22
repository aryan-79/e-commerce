"use client";
import React, { useState } from "react";
import { Heart, Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { FashionProductCategories } from "@/constants/categories";
import Accordion from "./custom_ui/Accordion";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="flex justify-between items-center py-2 px-4 h-16 relative container">
      <div className="text-2xl font-semibold">
        <Link href="/">LOGO</Link>
      </div>
      <nav className="h-full flex items-center gap-4">
        <ul className="hidden md:flex gap-4 items-center h-full px-2 md:border-r-2">
          <li className="font-semibold nav-list-item">
            <Link href="#">Home</Link>
          </li>
          <li className="font-semibold nav-list-item">
            <Link href="#">Featured</Link>
          </li>
          <li className="font-semibold nav-list-item">
            <Link href="#">Delivery</Link>
          </li>
          <li className="font-semibold nav-list-item">
            <Link href="#">About Us</Link>
          </li>
        </ul>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
        <Link href="/wishlist" className="nav-list-item">
          <Heart />
        </Link>
        <div className="relative nav-list-item">
          <ShoppingCart />
          <span className="flex items-center justify-center size-4 [clip-path:_circle(70%)] text-xs rounded-full bg-highlight absolute -right-2 -top-2 text-white">
            0
          </span>
        </div>
        {/* Mobile Nav */}
        <div
          className={cn(
            "md:hidden transition-all duration-1000 text-sm",
            isOpen &&
              "before:fixed before:left-0 before:top-0 before:h-screen before:w-screen before:bg-slate-800 before:opacity-70"
          )}
        >
          <div
            className={cn(
              "fixed h-screen w-56 top-0 left-0 py-4 px-2 bg-slate-50 -translate-x-60 transition-all duration-500 z-10 [box-shadow:_3px_0_10px_#a8a5a5]",
              isOpen && "transform-none before:content-['']"
            )}
          >
            <div className="flex justify-between border-b p-2">
              <p className="text-lg font-semibold">Menu</p>
              <X
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              />
            </div>
            <ul className="p-2 space-y-4">
              <li className="nav-list-item">
                <Link href="#">Home</Link>
              </li>
              <li className="nav-list-item">
                <Link href="#">Featured</Link>
              </li>
              <li className="nav-list-item">
                <Link href="#">Delivery</Link>
              </li>
              <li className="nav-list-item">
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Accordion title="Fashion">
                  <ul className="px-2 text-sm space-y-4">
                    {FashionProductCategories.map((category) => (
                      <li className="nav-list-item" key={category}>
                        <Link href={`/fashion/${category.toLowerCase()}`}>
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Accordion>
              </li>
              <li className="nav-list-item">
                <Link href="/electronics">Electronics</Link>
              </li>
              <li className="nav-list-item">
                <Link href="/furniture">Furniture</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
