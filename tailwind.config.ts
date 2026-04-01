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
        navy: {
          50: '#f0f3f9',
          100: '#d9e0f0',
          200: '#b3c1e0',
          300: '#8da2d1',
          400: '#6683c1',
          500: '#4064b2',
          600: '#33508e',
          700: '#263c6b',
          800: '#1a2847',
          900: '#0d1424',
          950: '#060a12',
        },
        gold: {
          50: '#fdf9ef',
          100: '#faf0d5',
          200: '#f4deaa',
          300: '#edc975',
          400: '#e5af43',
          500: '#d4952a',
          600: '#b87720',
          700: '#99591d',
          800: '#7d471e',
          900: '#683b1c',
          950: '#3b1d0b',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f0',
          200: '#faf3e0',
          300: '#f5e8c8',
          400: '#edd8a8',
          500: '#e2c482',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
