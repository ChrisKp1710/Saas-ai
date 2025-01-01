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
        background: "var(--background)", // Usa variabili CSS per lo sfondo
        foreground: "var(--foreground)", // Usa variabili CSS per il testo
      },
      fontSize: {
        base: "1rem", // 16px, sostituto per text-md
      },
    },
  },
  plugins: [],
};

export default config;
