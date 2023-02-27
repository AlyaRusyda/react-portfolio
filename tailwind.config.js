/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
      },
      backgroundImage: {
        'bgcuy': "url('/src/asset/sy.png')",
      },
      colors: {
        primary: "#2B3A55",
        sec: "#F2E5E5",
      },
      width: {
        bg: "500px",
        home: "600px",
        study: "350px"
      },
      height: {
        about: "800px",
        homesm: "720px",
        contact: "580px",
      },
      large: {
        bg: "600px",
      },
      margin: {
        about: "450px",
      },
    },
  },
  plugins: [],
}
