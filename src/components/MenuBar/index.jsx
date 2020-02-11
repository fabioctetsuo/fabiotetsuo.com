import React from 'react';
import items from '../Sidebar/Menu/content';
import MenuItem from './MenuItem';
import * as S from './styled';

const MenuBar = () => (
  <S.Container>
    {items.map((item, index) => {
      const Icon = S.Icons[item.label];
      return (
        <MenuItem key={index} to={item.url} label={item.label}>
          <Icon alt={item.label} />
        </MenuItem>
      );
    })}
  </S.Container>
);

export default MenuBar;
