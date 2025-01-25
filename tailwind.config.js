/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton SC', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        parkin: ['Parkinsans', 'sans-serif'],
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        highBounce: {
          '0%, 100%': { transform: 'translateY(-50%)' }, // Increase translateY for higher bounce
          '50%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        hBounce: 'highBounce 1s infinite', // Define the custom animation
      },
    },
  },
  plugins: [],
}
