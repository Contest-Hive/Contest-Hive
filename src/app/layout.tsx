import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import type { Viewport } from "next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari, credit to https://github.com/ai-ng
};

const title = "Contest Hive";
const description =
  "Contest Hive provides all the upcoming contests in one place. You will never miss a contest again. With the help of our API, you can integrate it with your website or app.";
const keywords =
  "contest, contest hive, contest api, upcoming contest, codeforces api, toph api, kontests api, hackerearth api, hackerrank api, codechef api, atcoder api, leetcode api, nusab taha, nusab19, toph leaderboard";
const url = "https://contest-hive.vercel.app/";

export const metadata = {
  title: title,
  description: description,
  keywords: keywords,
  openGraph: {
    title: title,
    description: description,
    url: url,
    images: ["https://contest-hive.vercel.app/opengraph-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
