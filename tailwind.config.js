
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ["./src/**/*.{html,js}"],
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

