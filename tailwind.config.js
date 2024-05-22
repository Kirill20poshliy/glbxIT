/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 20px 0 rgba(0, 0, 0, 0.1)',
      },
      colors: {
        'modalBg': 'rgba(188, 195, 208, 0.5)',
      },
      gridTemplateColumns: {
        'modal': 'auto auto',
      },
      width: {
        'calc': 'calc(100% - 1rem)' ,
      },
    },
  },
  plugins: [],
}