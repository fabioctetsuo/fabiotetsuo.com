import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global';
import Header from '../Header';
import theme from '../config';

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <Header />
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </div>
);

export default Layout;
