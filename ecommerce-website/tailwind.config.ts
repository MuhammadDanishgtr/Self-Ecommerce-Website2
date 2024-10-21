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
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        'beige-50': '#F5F5DC',  // Soft Beige
        'gray-900': '#333333',   // Dark Charcoal
        'yellow-500': '#F5C242', // Soft Gold
      },
    },
  },
  plugins: [],
};
export default config;
