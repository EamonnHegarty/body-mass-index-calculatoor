import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#FFFFFF", // reverse this to
    },
    primary: {
      main: "#5E6E85", // dark electric blue
      dark: "#253347", // gun metal
      light: "#345FF6", // strong blue
    },
    secondary: {
      main: "#D8E2E7", //borders
      light: "#FFFFFF", // white
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 16,
    // Heading XL
    h1: {
      fontSize: 64,
      fontWeight: 600,
    },
    // Heading L
    h2: {
      fontSize: 48,
      fontWeight: 600,
    },
    // Heading M
    h3: {
      fontSize: 24,
      fontWeight: 600,
    },
    // Heading S
    h4: {
      fontSize: 20,
      fontWeight: 600,
    },
    // Body M
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    // Body S
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
  },
});

export { theme };
