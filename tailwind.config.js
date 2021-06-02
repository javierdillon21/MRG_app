module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        tiny: ".7rem",
      },
      scale: {
        175: "1.75",
        200: "2",
      },
    },
  },
  variants: {
    extend: {
      visibility: ["hover", "focus", "group-focus"],
      display: ["hover", "focus", "group-focus"],
      textColor: ["hover", "focus", "group-focus", "active"],
      fontSize: ["hover", "focus", "group-focus"],
      backgroundColor: ["group-focus"],
      fontWeight: ["hover", "focus", "group-focus"],
    },
  },
  plugins: [],
};
