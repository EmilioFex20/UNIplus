/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PT Sans"', 'sans-serif'], // ✅ Aquí agregamos PT Sans
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
  },
  plugins: [],
}
