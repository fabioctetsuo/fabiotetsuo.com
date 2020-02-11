import React from 'react';
import { Link } from 'gatsby';
import * as S from './styled';

const MenuItem = ({ to, children }) => (
  <Link to={to}>
    <S.Container>
      {children}
    </S.Container>
  </Link>
);

export default MenuItem;
