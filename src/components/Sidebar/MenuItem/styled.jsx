import styled from 'styled-components'
import { Link } from 'gatsby';

export const Container = styled.div`
  width: 100%;
  padding: 12px 2rem;
  height: auto;
  display: flex;
  transition: background .3s;
  
  &:hover {
    background: rgba(151, 137, 235, 0.5);
  }

  &:active {
    background: rgba(106, 90, 205, 0.5);
  }
`;

export const MenuLink = styled(Link)`
  text-align: left;
  text-decoration: none;
  width: 100%;
  color: #000;
`;
