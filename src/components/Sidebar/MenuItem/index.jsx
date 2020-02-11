import React from 'react';

import * as Typography from '../../Typography';
import * as S from './styled';

const MenuItem = ({ to, label }) => (
  <S.Container>
    <S.MenuLink to={to}>
      <Typography.Body size={1}>
        {label}
      </Typography.Body>
    </S.MenuLink>
  </S.Container>
);

export default MenuItem;
