import styled from 'styled-components';
import media from 'styled-media-query';

import HomeImg from '../../images/menu/home.svg';
import InfoImg from '../../images/menu/info.svg';
import MailImg from '../../images/menu/mail.svg';

export const Container = styled.div`
  display: none;

  ${media.lessThan('large')`
    width: 100%;
    height: auto;
    padding: 8px;
    position: fixed;
    bottom: 0;
    background: #FFF;
    display: flex;
    border-top: 1px solid var(--borders);
  `}
`;

export const Home = styled(HomeImg)`
  width: 24px;
  height: 24px;
`;

export const About = styled(InfoImg)`
  width: 24px;
  height: 24px;
`;

export const Contact = styled(MailImg)`
  width: 24px;
  height: 24px;
`;

export const Icons = {
  Home,
  About,
  Contact,
};
