import React from "react"
import { ThemeProvider } from "styled-components"
import {
  ThemeProvider as MUIThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles"

import Appbar from "../Appbar"
import theme from "../config"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <StylesProvider>
      <MUIThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Appbar />
          {children}
        </ThemeProvider>
      </MUIThemeProvider>
    </StylesProvider>
  </>
)

export default Layout
