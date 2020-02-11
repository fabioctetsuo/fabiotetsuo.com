import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global';
import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';
import theme from '../config';
import * as S from './styled';

const Layout = ({ sidebar, children }) => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      {sidebar && (
        <S.LayoutWrapper>
          <Sidebar />
          <S.LayoutMain>
            {children}
          </S.LayoutMain>
          <MenuBar />
        </S.LayoutWrapper>
      )}
    </ThemeProvider>
  </div>
);

export default Layout;
