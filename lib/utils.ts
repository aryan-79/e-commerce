import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(value: string) {
  const capitalized = value.charAt(0).toUpperCase() + value.slice(1);
  return capitalized;
}
