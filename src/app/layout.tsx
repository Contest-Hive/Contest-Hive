import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "next-themes";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Contest Hive - HomePage</title>
        <meta
          name="description"
          content="All upcoming contests in one place. Contest Hive is a platform to find all the upcoming contests on various competitive programming platforms."
        />
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
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
