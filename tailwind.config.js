
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  // content: ["./src/**/*.{html,js}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: ["@typescript-eslint"],
};

