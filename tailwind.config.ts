import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['"Recursive"', ...fontFamily.sans],
      },
      colors: {
        pinkish: {
          DEFAULT: "#ef4444",
          foreground: "#ff6b6b",
        },
        blueish: {
          DEFAULT: "#002244",
          foreground: "#60a5fa",
        },
        greenish: {
          DEFAULT: "#10b981",
          foreground: "#34d399",
        },
        yellowish: {
          DEFAULT: "#f59e0b",
          foreground: "#fcd34d",
        },
        redish: {
          DEFAULT: "#dc2626",
          foreground: "#ef4444",
        },
        grayish: {
          DEFAULT: "#6b7280",
          foreground: "#9ca3af",
        },
        blackish: {
          DEFAULT: "#111827",
          foreground: "#1f2937",
        },
        whitish: {
          DEFAULT: "#f9fafb",
          foreground: "#f3f4f6",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, -45px) scale(.9)",
          },
          "13%": {
            transform: "translate(100px, -70px) scale(0.75)",
          },
          "33%": {
            transform: "translate(-100px, -100px) scale(1)",
          },
          "66%": {
            transform: "translate(0, -50px) scale(0.75)",
          },
          "88%": {
            transform: "translate(0, 0px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, -45px) scale(.9)",
          },
        },
        blobPhone: {
          "0%": {
            transform: "translate(-13px, 5px) scale(1)",
          },
          "13%": {
            transform: "translate(50px, -70px) scale(0.95)",
          },
          "33%": {
            transform: "translate(-100px, -50) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20, -60) scale(0.95)",
          },
          "88%": {
            transform: "translate(0px, 0px) scale(0.95)",
          },
          "100%": {
            transform: "translate(-13px, 5px) scale(1)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "blob-phone": "blobPhone 7s ease-in-out infinite",
        blob: "blob 7s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
