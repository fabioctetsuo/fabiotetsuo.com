import { createMuiTheme } from "@material-ui/core/styles"

const typography = {
  fontSize: 16,
  h1: {
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
  },
  h2: {
    fontSize: "2rem",
  },
  h3: {
    fontSize: "1.75em",
  },
  h4: {
    fontSize: "1.5rem",
  },
  h5: {
    fontSize: "1.25rem",
  },
  h6: {
    fontSize: "1.15rem",
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 300,
  },
}

export const lightTheme = createMuiTheme({
  typography,
  palette: {
    type: "light",
    primary: {
      main: "#6A5ACD",
      dark: "#171162",
      light: "#E5E0FC",
    },
    success: {
      main: "#7F57C2",
    },
    error: {
      main: "#B00020",
    },
    info: {
      main: "#1E88E5",
    },
    warning: {
      main: "#FFD400",
    },
    background: {
      default: "#fff",
    },
  },
})

export const darkTheme = createMuiTheme({
  typography,
  palette: {
    type: "dark",
    primary: {
      main: "#6A5ACD",
      dark: "#171162",
      light: "#E5E0FC",
    },
    success: {
      main: "#7F57C2",
    },
    error: {
      main: "#B00020",
    },
    info: {
      main: "#1E88E5",
    },
    warning: {
      main: "#FFD400",
    },
    background: {
      default: "#fff",
    },
  },
})

export default lightTheme
