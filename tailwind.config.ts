import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter, "Inter")', ...defaultTheme.fontFamily.sans],
        heading: ['var(--font-raleway, "Raleway")', 'var(--font-inter, "Inter")', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        floating: "floating 3s ease-in-out infinite alternate",
      },
      keyframes: {
        floating: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-25%)" },
        },
      },
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          "primary": "#6727ce",
          "secondary": "#f076bb",
          "accent": "#ed5989",
          "neutral": "#220844",
          "base-100": "#faf7fe",
        },
        dark: {
          "primary": "#7131d8",
          "secondary": "#8a0f55",
          "accent": "#a51241",
          "neutral": "#260845",
          "base-100": "#050109",
        },
      },
    ],
    darkTheme: "dark",
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("daisyui"),
    require("@headlessui/tailwindcss"),
  ],
};
export default config;
