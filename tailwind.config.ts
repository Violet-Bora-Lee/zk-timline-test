import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        "gray-200": "var(--gray-200)",
        "gray-300": "var(--gray-300)",
        "gray-600": "var(--gray-600)",
        "gray-800": "var(--gray-800)",
        "gray-900": "var(--gray-900)",
        white: "var(--white)",
        customWhite: "#ffffff",
        customBlack: "#000000",
        customGray: "#6f6f6f",
      },
    },
  },
  plugins: [],
} satisfies Config;
