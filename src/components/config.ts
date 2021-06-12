import { createMuiTheme, Theme } from "@material-ui/core/styles"

const DEFAULT_FONT_SIZE = 18

function pxToRem(value: number, base?: number) {
  return `${value / (base || DEFAULT_FONT_SIZE)}rem`
}

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#6A5ACD",
      dark: "#171162",
      light: "#E5E0FC",
    },
    secondary: {
      main: "#FFF",
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
  palette: {
    type: "dark",
    primary: {
      main: "#6A5ACD",
      dark: "#171162",
      light: "#E5E0FC",
    },
    secondary: {
      main: "#FFF",
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

const getCustomTypography = (theme: Theme) => ({
  h1: {
    fontSize: pxToRem(32),
    lineHeight: pxToRem(32),

    [theme.breakpoints.up("md")]: {
      fontSize: pxToRem(40),
      lineHeight: pxToRem(40),
    },
  },
  h2: {
    fontSize: pxToRem(28),

    [theme.breakpoints.up("md")]: {
      fontSize: pxToRem(36),
      lineHeight: pxToRem(36),
    },
  },
  h3: {
    fontSize: pxToRem(24),

    [theme.breakpoints.up("md")]: {
      fontSize: pxToRem(32),
    },
  },
  h4: {
    fontSize: pxToRem(20),

    [theme.breakpoints.up("md")]: {
      fontSize: pxToRem(28),
    },
  },
  h5: {
    fontSize: pxToRem(18),

    [theme.breakpoints.up("md")]: {
      fontSize: pxToRem(24),
    },
  },
  h6: {
    fontSize: pxToRem(16),

    [theme.breakpoints.up("md")]: {
      fontSize: pxToRem(20),
    },
  },
  body1: {
    fontSize: pxToRem(DEFAULT_FONT_SIZE),
    fontWeight: 300,
    lineHeight: pxToRem(24),
  },
  caption: {
    fontSize: pxToRem(14),
    fontWeight: 400,
  },
})

lightTheme.typography = {
  ...lightTheme.typography,
  ...getCustomTypography(lightTheme),
}
darkTheme.typography = {
  ...darkTheme.typography,
  ...getCustomTypography(darkTheme),
}

export default lightTheme
