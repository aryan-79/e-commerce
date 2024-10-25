"use client";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React, {
  SelectHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface DropdownProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  title: string;
  onChange?: () => void;
  options: string[];
}

const Select = ({ title, options, onChange, ...props }: DropdownProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const selectRef = useRef<HTMLSelectElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionChange = useCallback(
    (value: string) => {
      if (selectRef.current) {
        selectRef.current.value = value;
      }
      setIsExpanded(false);
    },
    [selectRef],
  );
  return (
    <div className="relative w-full bg-white" ref={wrapperRef}>
      <button
        className="flex h-10 w-full items-center justify-between border border-[#d1d5db] p-2"
        role="menu"
        aria-expanded={isExpanded}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          console.log(selectRef.current?.value);
          setIsExpanded(!isExpanded);
        }}
      >
        <span className="pointer-events-none">{title}</span>
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-150",
            isExpanded && "rotate-180",
          )}
        />
      </button>
      {isExpanded && (
        <ul className="absolute right-0 top-12 z-20 grid w-full min-w-max gap-2 rounded-lg bg-inherit p-2 shadow-md animate-in">
          {options.map((option, index) => (
            <li
              className={cn(
                "w-full cursor-pointer p-2 text-center text-black before:text-inherit hover:bg-neutral-300",
              )}
              value={option.toLowerCase()}
              key={`option${index}`}
              onClick={() => handleOptionChange(option.toLowerCase())}
            >
              {selectRef.current?.value === option.toLowerCase() && (
                <span className="mr-2">&#10003;</span>
              )}
              {option}
            </li>
          ))}
        </ul>
      )}

      <select
        ref={selectRef}
        {...props}
        className="hidden"
        defaultValue={options[0]}
      >
        {options.map((option, index) => (
          <option value={option.toLowerCase()} key={`select-option${index}`}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
