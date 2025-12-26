import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { Recursive } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import GlobalShortcuts from "@/components/GlobalShortcuts";
import ShortcutModal from "@/components/ShortcutModal";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontRecursive = Recursive({
  subsets: ["latin"],
  variable: "--font-sans",
});

const title = "Contest Hive - Upcoming Contests in One Place";
const description =
  "Contest Hive provides all the upcoming contests from Atcoder, CodeChef, Codeforces, HackerEarth, HackerRank, LeetCode and Toph in one place. Never miss a contest again!";
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
        <GlobalShortcuts />
        <ShortcutModal />
        <Toaster />
      </body>
      <GoogleAnalytics gaId="G-75X001RBNN" />
    </html>
  );
}
