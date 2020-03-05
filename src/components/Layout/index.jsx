import React from 'react';
import { ThemeProvider } from 'styled-components';

import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';
import theme from '../config';
import * as S from './styled';
import GlobalStyles from '../../styles/global';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <S.LayoutWrapper>
        <Sidebar />
        <S.LayoutMain>
          {children}
        </S.LayoutMain>
        <MenuBar />
      </S.LayoutWrapper>
    </ThemeProvider>
  </>
);

export default Layout;
