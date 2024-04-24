import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      animation:{
        'jump-in': 'jump-in 3s ease-in-out',

      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      animationDelay: {
        275: "275ms",
        5000: "5s",
      },

      animationDuration: {
        2000: "2s",
        long: "10s",
        "very-long": "20s",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
