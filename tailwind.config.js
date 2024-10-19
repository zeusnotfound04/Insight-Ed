/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  
  theme: {
    extend: {
      fontFamily :{
        barlow : ["Barlow Semi Condensed", "sans-serif"],
        NueueMontreal: ["NueueMontreal", "sans-serif"],
        Viga : ["Viga" ,"sans-serif"],
        Grotesk : ["Hanken Grotesk" , "sans-serif"]
        
      }
    },
  },
  plugins: [],
}

