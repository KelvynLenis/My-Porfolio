/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        light: "#EAEAEA",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        light: "0px 20px 50px -15px #211e35",
      },
      dropShadow: {
        'img': '0 2px 20px #aaa6c3',
        'primary': '0 1.5px 6px #aaa6c3',
        'violet': '0 1.5px 6px rgb(167 139 250)',
        'blue': '0 1.5px 6px rgb(125 211 252)',
        'red': '0 1.5px 6px rgb(220 38 38)',
        'secondary': '0 1px 5px #aaa6c3',
        'text': '0px 1px 10px #fff',
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "nav-bar": "url('assets/img/banner-bg.png')"
      },
    },
  },
  plugins: [],
}
