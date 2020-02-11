import React from 'react';
import { Link } from 'gatsby';
import * as S from './styled';

const MenuItem = ({ to, label, children }) => (
  <Link to={to} aria-label={label}>
    <S.Container>
      {children}
    </S.Container>
  </Link>
);

export default MenuItem;
