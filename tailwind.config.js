/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',          // Main App file
    './src/Pages/**/*.{js,jsx,ts,tsx}',    // All components and pages inside src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
