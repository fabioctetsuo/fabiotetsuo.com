import styled from 'styled-components';
import media from 'styled-media-query';
import GithubImg from '../../images/social/github.svg';
import InstagramImg from '../../images/social/instagram.svg';
import TwitterImg from '../../images/social/twitter.svg';
import LinkedInImg from '../../images/social/linkedin.svg';

export const Container = styled.div`
  margin: 24px 0 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  ${media.lessThan("large")`
    display: none;
  `}
`;

export const Github = styled(GithubImg)`
  width: 24px;
  height: 24px;
`;

export const Instagram = styled(InstagramImg)`
  width: 24px;
  height: 24px;
`;

export const Twitter = styled(TwitterImg)`
  width: 24px;
  height: 24px;
`;

export const LinkedIn = styled(LinkedInImg)`
  width: 24px;
  height: 24px;
`;

export const IconWrapper = styled.div`
  width: auto;
  margin-right: 8px;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s;
  
  &:hover {
    background: rgba(151, 137, 235, 0.5);
  }

  &:active {
    background: rgba(106, 90, 205, 0.5);
  }
`;

export const Icons = {
  Github,
  Instagram,
  Twitter,
  LinkedIn,
};