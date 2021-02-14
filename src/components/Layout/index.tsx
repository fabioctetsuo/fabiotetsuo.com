import React from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles"

import Appbar from "../Appbar"
import { lightTheme, darkTheme } from "../config"
import GlobalStyles from "../../styles/global"

type LayoutProps = {}

declare global {
  interface Window {
    __theme: "dark" | "light"
    __onThemeChange: () => void
    __setPreferredTheme: (theme: string) => void
  }
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<"dark" | "light" | null>(null)
  const isDarkMode = theme === "dark"
  const selectedTheme = isDarkMode ? darkTheme : lightTheme
  const illustrationBackground = isDarkMode ? "#403b58" : "#ac9ff0"

  React.useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  React.useEffect(() => {
    document
      .querySelector("#home-illustration #background")
      ?.setAttribute("fill", illustrationBackground)
  }, [theme])

  return (
    <ThemeProvider theme={selectedTheme}>
      <StyledThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        <Appbar
          theme={theme}
          setTheme={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
        />
        {children}
      </StyledThemeProvider>
    </ThemeProvider>
  )
}

export default Layout
