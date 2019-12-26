import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 32px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  margin: 0 16px
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
`;
