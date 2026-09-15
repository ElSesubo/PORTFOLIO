import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'mi-fuente' : ['Windows95', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};

const config: Config = {
  darkMode: "class",
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        skytop: "#bfe6ff",
        skybottom: "#4f9fe8",
        aero: "#2a8fd8",
        aerodark: "#0d5aa7",
        aqua: "#7ed9c6",
        glass: "rgba(255,255,255,0.18)",
      },
      fontFamily: {
        display: ["var(--font-quicksand)", "Segoe UI", "sans-serif"],
        ui: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        floatBubble: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.55" },
          "50%": { opacity: "0.85" },
          "100%": { transform: "translateY(-40px) scale(1.05)", opacity: "0.55" },
        },
        shine: {
          "0%": { backgroundPosition: "-150% 0" },
          "100%": { backgroundPosition: "250% 0" },
        },
      },
      animation: {
        bubble: "floatBubble 6s ease-in-out infinite",
        shine: "shine 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
