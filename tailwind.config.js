/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#FF0092",
        
          "secondary": "#ffCA1B",
        
          "accent": "#B6ff00",
        
          "neutral": "#228dFF",
        
          "base-100": "#2A303C",
        
          "info": "#3ABFF8",
        
          "success": "#36D399",
        
          "warning": "#FBBD23",
        
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
