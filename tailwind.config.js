/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  
  theme: {
    extend: {
      fontSize: {
        
        'small' : "12px"
      },
      fontFamily :{

        fira : ["Fira Sans", " sans-serif"] ,
        barlow : ["Barlow Semi Condensed", "sans-serif"],
        NueueMontreal: ["NueueMontreal", "sans-serif"],
        Viga : ["Viga" ,"sans-serif"],
        Grotesk : ["Hanken Grotesk" , "sans-serif"]
        
      }
    },
  },
  plugins: [],
}

