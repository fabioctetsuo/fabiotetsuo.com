import styled from 'styled-components';
import GithubImg from '../../images/social/github.svg';
import InstagramImg from '../../images/social/instagram.svg';
import TwitterImg from '../../images/social/twitter.svg';

export const Container = styled.div`
  margin: 24px 0 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Github = styled(GithubImg)`
  width: 24px;
  height: 24px;
`;

export const Instagram = styled(InstagramImg)`
  width: 24px;
  height: 24px;
  margin: 0 16px;
`;

export const Twitter = styled(TwitterImg)`
  width: 24px;
  height: 24px;
`;

export const Icons = {
  Github,
  Instagram,
  Twitter,
};