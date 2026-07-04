import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#0A0A0A",
        "surface-lowest": "#0A0A0A",
        "surface-low": "#121212",
        "surface-high": "#18181B",
        primary: "#06B6D4",
        "outline-variant": "#27272A",
        "on-background": "#FFFFFF",
        "on-surface-variant": "#A1A1AA",
      },
      fontFamily: {
        headline: ["var(--font-plus-jakarta)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
