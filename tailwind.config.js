/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      animation: {
        "scale-up": "scale-up 0.5s forwards",
        "scale-down": "scale-down 0.2s forwards",
      },
      keyframes: {
        "scale-up": {
          to: { transform: "scale(1.1)" },  
        },
        "scale-down": {
          from: { transform: "scale(1.1)" },
          to: { transform: "scale(0)" },
        },
      },
      fontSize: {
        'small': "12px",
      },
      fontFamily: {
        fira: ["Fira Sans", "sans-serif"],
        barlow: ["Barlow Semi Condensed", "sans-serif"],
        NueueMontreal: ["NueueMontreal", "sans-serif"],
        Viga: ["Viga", "sans-serif"],
        Grotesk: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}
