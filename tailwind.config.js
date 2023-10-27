/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-pink': '#F7D5C8', 
        'custom-blue': '#00F',
        'custom-black': '#131A3E', 
      },
    },
  },
  plugins: [],
};
