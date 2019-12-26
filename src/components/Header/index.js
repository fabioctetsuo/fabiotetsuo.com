import React from 'react';
import * as Typography from '../Typography';
import * as S from './styles';

const Header = () => (
  <S.Container>
    <Typography.Heading size={3} color="#8070E3">
      Fabio Tetsuo
    </Typography.Heading>
    <S.Navbar>
      <S.NavList>
        <S.NavItem>
          <Typography.Body color="#8070E3">
            Sobre
          </Typography.Body>
        </S.NavItem>
        <S.NavItem>
          <Typography.Body color="#8070E3">
            Blog
          </Typography.Body>
        </S.NavItem>
      </S.NavList>
    </S.Navbar>
  </S.Container>
);

export default Header;
