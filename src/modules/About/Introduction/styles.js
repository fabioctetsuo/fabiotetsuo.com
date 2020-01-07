import styled from 'styled-components';
import ProfileImage from '../../../images/profile.svg';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
`;

export const IntroductionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 100%;

  ${media.lessThan('medium')`
    align-items: center;
  `}
`;

export const Introduction = styled.div`
  width: auto;
  margin: 64px 0 256px;
  display: flex;
  flex-direction: column;

  ${media.lessThan('small')`
    margin: 32px 0 160px;
    justify-content: center;
    align-items: center;
  `}
`;

export const Profile = styled(ProfileImage)`
  width: 180px;
  height: 180px;
  margin: 0 0 16px;

  ${media.lessThan('medium')`
    width: 140px;
    height: 140px;
  `}
`;

export const Presentation = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  ${media.lessThan('medium')`
    width: 100%;
  `}
`;

export const TextWrapper = styled.div`
  margin: 0 0 8px;
`;
