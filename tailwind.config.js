/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    colors: {
      'mylightgreen': "#a3b18a",
      'mydarkgreen': "#344e41",
      'mygreen': "#588157",
      'mygray': "#dad7cd",
      'myblue': "#1455CD",
      'myred': "#FF0000",
      'white': "#FFFFFF",
      'transparent': '#FFFFFFdf',
      'transparent-gray': '#E8E6E6f2',
      'transparent-lightgray': '#E8E6E6b3',
      'black': "#000000",
    },
    fontFamily: {
      'abril-fatface': ['"Abril Fatface"', 'serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    backgroundImage: {
      'backgroundHeader': 'url("/assets/bg.jpg")',
      'bestSale-1': 'url("/src/assets/best_sale/1.jpg")',
      'bestSale-2': 'url("/src/assets/best_sale/2.jpg")',
      'bestSale-3': 'url("/src/assets/best_sale/3.jpg")',
      'bestSale-4': 'url("/src/assets/best_sale/4.jpg")',
      'plant-1': 'url("/src/assets/plant/1.jpg")',
      'plant-2': 'url("/src/assets/plant/2.jpg")',
      'plant-3': 'url("/src/assets/plant/3.jpg")',
      'plant-4': 'url("/src/assets/plant/4.jpg")',
      'plant-5': 'url("/src/assets/plant/5.jpg")',
      'plant-6': 'url("/src/assets/plant/6.jpg")',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
