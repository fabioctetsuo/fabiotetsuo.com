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
  margin: 0 8px 0 16px;
`;

export const Twitter = styled(TwitterImg)`
  width: 24px;
  height: 24px;
  margin: 0 16px 0 8px;
`;

export const LinkedIn = styled(LinkedInImg)`
  width: 24px;
  height: 24px;
`;


export const Icons = {
  Github,
  Instagram,
  Twitter,
  LinkedIn,
};