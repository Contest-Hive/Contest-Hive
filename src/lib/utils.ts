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

export function randomInt(num: number = 100) {
  return parseInt(String((Math.random() + 1) * num));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function escapeHTML(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Validates if a string is a valid email format or is empty/whitespace.
 * * Logic:
 * 1. Trims the input to check for empty strings or whitespace-only content.
 * 2. If not empty, validates against a standard RFC 5322 compliant regex.
 * * @param email - The string to validate.
 * @returns boolean - true if valid or empty, false otherwise.
 */
export function isValidEmailOrEmpty(email: string): boolean {
  const trimmedEmail = email.trim();

  // Accept if the string is empty or was only whitespace
  if (trimmedEmail === "") {
    return true;
  }

  // Standard email regex pattern
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(trimmedEmail);
}
