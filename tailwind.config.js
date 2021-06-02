module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        tiny: ".7rem",
      },
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        "90p": "90%",
        "92p": "92%",
        "95p": "95%",
      },
      scale: {
        175: "1.75",
        200: "2",
        215: "2.15",
        225: "2.25",
        250: "2.5",
      },
    },
  },
  variants: {
    extend: {
      visibility: ["hover", "focus", "group-focus", "group-hover"],
      display: ["hover", "focus", "group-focus", "group-hover"],
      textColor: ["hover", "focus", "group-focus", "active", "group-hover"],
      fontSize: ["hover", "focus", "group-focus", "group-hover"],
      backgroundColor: ["group-focus", "active", "group-hover", "hover"],
      fontWeight: ["hover", "focus", "group-focus", "active", "group-hover"],
      fill: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};
