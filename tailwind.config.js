module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#0E1849", // #20232A
        "secondary-dark-bg": "#2E4485", // #33373E
        "light-gray": "#7397BE", // #F7F7F7
        "half-transparent": "rgba(0, 0, 0, 0.5)",
        "main-dark-blue-bg": "#0E1849", // #0e1740 #132565 #0f1b4b #0a1334 #5a6794
        "secondary-dark-blue-bg": "#2E4485",
        "light-blue": "#7397BE",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern": "url('./data/Work.png')",
      },
    },
  },
  plugins: [],
};
