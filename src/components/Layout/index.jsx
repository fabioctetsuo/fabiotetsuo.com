import React from "react"
import { ThemeProvider } from "styled-components"
import {
  ThemeProvider as MUIThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles"

import Appbar from "../Appbar"
import { lightTheme, darkTheme } from "../config"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  const [theme, setTheme] = React.useState(null)
  const isDarkMode = theme === "dark"
  const selectedTheme = isDarkMode ? darkTheme : lightTheme

  React.useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <>
      <GlobalStyles />
      <StylesProvider>
        <MUIThemeProvider theme={selectedTheme}>
          <ThemeProvider theme={selectedTheme}>
            <Appbar
              theme={theme}
              setTheme={() => {
                window.__setPreferredTheme(isDarkMode ? "light" : "dark")
              }}
            />
            {children}
          </ThemeProvider>
        </MUIThemeProvider>
      </StylesProvider>
    </>
  )
}

export default Layout
