// @type {import('tailwindcss').Config} 
module.exports = {
  content: ["./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "btn-color" : '#1597e4',
        "r-btn-color" : '#7a7a7a',
      },
      width: {
        'w40': '46%',
        'cardW': "48%",
      },
    },
  },
  plugins: [],
}

