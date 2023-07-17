
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        body: ['Nunito'],
      },
      backgroundImage: {
        Banner: "url('/src/assets/banner.jpg')",
      },
    },
  },
  plugins: [],
}

