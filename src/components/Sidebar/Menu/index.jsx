import React from 'react';
import MenuItem from '../MenuItem';
import items from './content';
import * as S from './styled';

const Menu = () => (
  <S.Container>
    {items.map((item, index) => (
      <MenuItem
        key={index}
        to={item.url}
        label={item.label}
      />
    ))}
  </S.Container>
);

export default Menu;
