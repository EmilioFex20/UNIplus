/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['"PT Sans"', 'sans-serif'],
    },
    keyframes: {
      moverNube: {
        '0%': { transform: 'translateX(-20vw)' },
        '100%': { transform: 'translateX(120vw)' },
      },
    },
    animation: {
      moverNube: 'moverNube linear infinite',
    },
  },
};
export const plugins = [];
