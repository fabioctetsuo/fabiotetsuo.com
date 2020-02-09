import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global';
import Sidebar from '../Sidebar';
import Header from '../Header';
import theme from '../config';
import * as S from './styled';

const Layout = ({ sidebar, children }) => console.log(sidebar) || (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      {sidebar && (
        <S.LayoutWrapper>
          <Sidebar />
          <S.LayoutMain>
            {children}
          </S.LayoutMain>
        </S.LayoutWrapper>
      )}
      {!sidebar && (
        <>
          <Header />
          {children}
        </>
      )}
    </ThemeProvider>
  </div>
);

export default Layout;
