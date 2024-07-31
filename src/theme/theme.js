// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: { default: "#F2F2F2" },
    primary: {
      main: "#0C9DA0",
      light: "#C6ECE0",
      dark: "#56BDBF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#8F507F",
      light: "#E6DAE3",
      dark: "#A596BA",
    },
  },
  typography: {
    fontFamily: "Playfair Display, serif",
    h1: {
      fontSize: "2rem",
    },
  },
});

export default theme;
