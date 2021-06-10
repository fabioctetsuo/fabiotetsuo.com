import * as React from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { ThemeProvider } from "@material-ui/core/styles"
import Footer from "../Footer"

import Appbar from "../Appbar"
import { lightTheme, darkTheme } from "../config"
import GlobalStyles from "../../styles/global"

type LayoutProps = {}

type ThemeContextProps = {
  isDarkMode: boolean
}

declare global {
  interface Window {
    __theme: "dark" | "light"
    __onThemeChange: () => void
    __setPreferredTheme: (theme: string) => void
  }
}

export const ThemeContext = React.createContext<null | ThemeContextProps>(null)

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
        <ThemeContext.Provider value={{ isDarkMode }}>
          {children}
        </ThemeContext.Provider>
        <Footer />
      </StyledThemeProvider>
    </ThemeProvider>
  )
}

export default Layout
