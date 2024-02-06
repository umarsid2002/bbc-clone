/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'earthback': "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3029586834733894) 100%), url('/assets/background1.jpg')",

        'reelback': "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3029586834733894) 100%), url('/assets/background2.jpg')",
      },

    },
  },
  plugins: [],
}

