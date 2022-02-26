module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            img: {
              marginTop: "0",
              marginBottom: "0",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss/colors"),
    require("autoprefixer"),
  ],
  variants: {
    scale: ["hover", "group-hover"],
    scaleX: ["hover", "group-hover"],
    skew: ["group-hover"],
    translate: ["group-hover"],
    fill: ["hover", "group-hover"],
    fontWeight: ["hover", "group-hover"],
    rotate: ["hover", "group-hover"],

    extend: {
      stroke: ["hover", "group-hover"],
      fill: ["hover", "group-hover"],
    },
  },
};
