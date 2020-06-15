import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

export const Introduction = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
`;

export const Profile = styled.div`
  width: 160px;
  margin: 0 0 16px;

  ${media.lessThan('medium')`
    width: 125px;
  `}
`;

export const IntroductionText = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  ${media.lessThan('medium')`
    width: 100%;
  `}
`;

export const TextWrapper = styled.div`
  margin: 0 0 8px;
`;

export const BackgroundImage = styled(Img)`
  ${media.lessThan('medium')`
    align-self: center;
    width: 100%;
  `}

  ${media.between('medium', 'large')`
    align-self: center;
    width: 70%;
  `}
`;