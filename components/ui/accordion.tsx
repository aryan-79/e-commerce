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
    <div>
      <button
        onClick={handleClick}
        className="accordion flex w-full items-center justify-between gap-2 hover:text-highlight"
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
          isOpen ? "max-h-[800px]" : "max-h-0",
        )}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;
