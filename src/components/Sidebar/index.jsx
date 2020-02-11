import React from 'react';
import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import Menu from './Menu';

import * as S from './styled';

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <Menu />
  </S.SidebarWrapper>
);

export default Sidebar;