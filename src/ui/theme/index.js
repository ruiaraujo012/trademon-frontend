import { createMuiTheme } from "@material-ui/core/styles";

const themeName = "Trademon";

const palette = {
  common: { black: "#000", white: "#fff" },
  background: {
    paper: "rgba(227, 223, 207, 1)",
    default: "rgba(255, 252, 236, 1)",
  },
  primary: {
    light: "rgba(255, 135, 58, 1)",
    main: "rgba(204, 88, 3, 1)",
    dark: "rgba(148, 41, 0, 1)",
    contrastText: "#fff",
  },
  secondary: {
    light: "rgba(255, 196, 122, 1)",
    main: "rgba(247, 147, 76, 1)",
    dark: "rgba(191, 100, 30, 1)",
    contrastText: "rgba(255, 252, 236, 1)",
  },
  error: {
    light: "#e57373",
    main: "#f44336",
    dark: "#d32f2f",
    contrastText: "rgba(255, 252, 236, 1)",
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.54)",
    disabled: "rgba(0, 0, 0, 0.38)",
    hint: "rgba(0, 0, 0, 0.38)",
  },
};

const typography = {
  fontFamily: ['"Rubik"', "sans-serif"].join(","),
};

export default createMuiTheme({ palette, typography, themeName });
