import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgCloud': "url('https://i.postimg.cc/cHTZz1p2/Whats-App-Image-2025-02-13-at-5-27-15-PM.jpg')", // Ruta dentro de la carpeta `public/`
      },
    },
  },
  plugins: [],
} satisfies Config;
