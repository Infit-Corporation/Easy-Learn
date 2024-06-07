/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "white-color": "#fff",
        gray: {
          "100": "#161616",
          "200": "rgba(29, 29, 29, 0.7)",
        },
        "dark-06": "#e8e8e8",
        "dark-01": "#1d1d1d",
        "dark-02": "#4a4a4a",
        "dark-03": "#777",
        steelblue: {
          "100": "#289bde",
          "200": "#0f82c4",
          "300": "rgba(40, 155, 222, 0.1)",
        },
        gainsboro: "#e6e6e6",
        "dark-07": "#f4f4f4",
        aliceblue: "#f4fafd",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "8xs": "5px",
        "10xs-8": "2.8px",
        "10xs-3": "2.3px",
      },
    },
    fontSize: {
      mini: "15px",
      base: "16px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      "26xl": "45px",
      "8xl": "27px",
      "17xl": "36px",
      xl: "20px",
      lg: "18px",
      "6xl": "25px",
      "11xl": "30px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
