import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trimString(str: string, maxLen: number) {
  if (str.length <= maxLen) {
    return str;
  }
  return str.slice(0, maxLen - 3) + "...";
}

export function formatNumber(num: number) {
  const formatter = Intl.NumberFormat("en", {
    notation: "compact",
  });
  let formatted = formatter.format(num);
  return formatted;
}


export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
