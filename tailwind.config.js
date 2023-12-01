/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "berita.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#001C30",
        dark_2: "#2D4356",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
