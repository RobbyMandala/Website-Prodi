/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "index.html", "berita.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#001C30",
        dark_2: "#2D4356",
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
