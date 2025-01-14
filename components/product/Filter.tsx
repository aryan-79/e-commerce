"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FilterIcon } from "lucide-react";

const categories = [
  { name: "Mobiles", href: "/mobiles" },
  {
    name: "Electronics and Accessories",
    href: "/electronics",
  },
  { name: "Fashion", href: "/fashion" },
  { name: "Grocery", href: "/grocery" },
];

export default function FilterDropdown() {
  const [isExpanded, setIsExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsExpanded(false);
    }
  };

  return (
    <div className="relative z-50" ref={dropdownRef} onKeyDown={handleKeyDown}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="outline-btn"
        aria-expanded={isExpanded}
        aria-haspopup="true"
      >
        <span>Filter</span>
        <FilterIcon className="h-4 w-4" />
      </button>

      <ul
        className={`absolute right-0 top-12 w-max rounded-md border bg-background shadow-lg transition-all duration-200 ease-in-out ${
          isExpanded ? "visible opacity-100" : "invisible opacity-0"
        }`}
        role="menu"
      >
        {categories.map((category) => (
          <li key={category.name} role="none">
            <Link
              href={category.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
              role="menuitem"
              onClick={() => setIsExpanded(false)}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
