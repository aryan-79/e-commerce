"use client";
import { useState } from "react";
import { CircleUserRound, Heart, Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { FashionProductCategories } from "@/constants/categories";
import Accordion from "./ui/accordion";
import { cn } from "@/lib/utils";
import Logo from "./logo/logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isLogged = false;
  return (
    <header className="container relative flex h-16 items-center justify-between px-4 py-2">
      <Link href="/" className="text-2xl font-semibold">
        <Logo size={32} />
      </Link>
      <nav className="flex h-full items-center gap-4">
        <ul className="hidden h-full items-center gap-4 px-2 md:flex md:border-r-2">
          <li className="nav-list-item font-semibold">
            <Link href="#">Home</Link>
          </li>
          <li className="nav-list-item font-semibold">
            <Link href="#">Featured</Link>
          </li>
          <li className="nav-list-item font-semibold">
            <Link href="#">Delivery</Link>
          </li>
          <li className="nav-list-item font-semibold">
            <Link href="#">About Us</Link>
          </li>
        </ul>
        {!isLogged && (
          <Link href="/login">
            <button className="primary-btn">Login</button>
          </Link>
        )}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen && <Menu />}
        </button>

        {isLogged && (
          <>
            <Link href="/wishlist" className="nav-list-item">
              <Heart />
            </Link>

            <Link href="/profile">
              <CircleUserRound />
            </Link>

            <div className="nav-list-item relative">
              <ShoppingCart />
              <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-highlight text-xs text-white [clip-path:_circle(70%)]">
                0
              </span>
            </div>
          </>
        )}
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </header>
  );
};
const MobileNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <aside
      className={cn(
        "z-50 text-sm transition-all duration-1000 md:hidden",
        isOpen &&
        "before:fixed before:left-0 before:top-0 before:h-screen before:w-screen before:bg-slate-800 before:opacity-70",
      )}
    >
      <div
        className={cn(
          "fixed left-0 top-0 h-screen w-56 -translate-x-60 bg-slate-50 px-2 py-4 transition-all duration-500 [box-shadow:_3px_0_10px_#a8a5a5]",
          isOpen && "transform-none",
        )}
      >
        <div className="flex justify-between border-b p-2">
          <p className="text-lg font-semibold">Menu</p>
          <X onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />
        </div>
        <ul className="space-y-4 p-2">
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
              <ul className="space-y-4 px-2 py-4 text-sm">
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
    </aside>
  );
};

export default Navbar;
