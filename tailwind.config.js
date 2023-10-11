/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#FF9531",
        "primary-2": "#FFAA5A",
        "primary-3": "#FFC58E",
        "primary-4": "#FFE7D0",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
