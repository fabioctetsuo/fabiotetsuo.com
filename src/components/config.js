import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
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

export default theme
