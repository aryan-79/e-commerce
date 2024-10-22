"use client";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Accordion = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "grid",
        isOpen ? "grid-rows-[auto,1fr]" : "grid-rows-[auto,0fr]"
      )}
    >
      <button
        onClick={handleClick}
        className="flex gap-2 items-center justify-between w-full"
        aria-expanded={isOpen}
      >
        {props.title}{" "}
        <ChevronDown
          size={16}
          className={cn("transition-all duration-500", isOpen && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-[max-height] duration-500",
          isOpen ? "max-h-[800px] mt-4" : "max-h-0"
        )}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;
