/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    colors: {
      'mygreen': "#ADD981",
      'myblue': "#1455CD",
      'mygray': "#E8E6E6",
      'myred': "#FF0000",
      'white': "#FFFFFF",
      'transparent': '#FFFFFFDF',
      'black': "#000000",
    },
    fontFamily: {
      'abril-fatface': ['"Abril Fatface"', 'serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    backgroundImage: {
      'backgroundHeader': 'url("/public/assets/bg.jpg")',
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
