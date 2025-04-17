import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { Recursive } from "next/font/google";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontRecursive = Recursive({
  subsets: ["latin"],
  variable: "--font-sans",
});
/*
import type { Viewport } from "next";
export const viewport: Viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari, credit to https://github.com/ai-ng
};
*/

const title = "Contest Hive";
const description =
  "Contest Hive provides all the upcoming competitive contests in one place. You will never miss a contest again. With the help of our API, you can integrate it with your website or app.";
const keywords =
  "contest, contest hive, contest api, upcoming contest, codeforces api, toph api, kontests api, hackerearth api, hackerrank api, codechef api, atcoder api, leetcode api";
const url = "https://contest-hive.vercel.app/";

export const metadata = {
  metadataBase: new URL(url),
  title: title,
  description: description,
  keywords: keywords,
};
export const fetchCache = "default-no-store";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="google-site-verification"
          content="XLTmt69wH57wnU1mAOAb9t2kQjBMW7Px6hwBBeahMfI"
        />
      </head>
      <body
        className={cn(
          fontRecursive.className,
          "min-h-screen bg-background antialiased",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
