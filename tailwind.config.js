/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}" ,"./public/index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        "mm":"324px"
      },
      colors: {
        "textColor": '#323235',
        "footer-bg": "#F1F1F1",
        "testimonialBg": "rgb(22, 11, 87)",
        "fromColorTestimonial": "#141E30",
        "toColorTestimonial": "#243B55",
        "BgFrom":"#d3cce3",
        "BgTo": "#e9e4f0"
      },
    },
  },
  plugins: [],
}
