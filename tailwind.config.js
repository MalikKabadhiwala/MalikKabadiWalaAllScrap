/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#023440',
          darker: '#012028',
          light: '#054756',
          cream: '#f0edcc',
          creamDark: '#dfdbb0',
          creamLight: '#faf9ec',
        },
        primary: {
          DEFAULT: '#023440',
          dark: '#012028',
          light: '#054756',
        },
        accent: {
          DEFAULT: '#f0edcc',
          dark: '#dfdbb0',
          light: '#faf9ec',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
