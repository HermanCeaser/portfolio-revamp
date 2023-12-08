/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#11071F",
        light: "#1A0B2E",
        bunker: {
          100: "#e7eef7",
          200: "#cad9ed",
          300: "#9bbade",
          400: "#6695ca",
          500: "#4278b5",
          600: "#315f98",
          700: "#294c7b",
          800: "#254267",
          900: "#233957",
        },
      },
    },
  },
  plugins: [],
};
